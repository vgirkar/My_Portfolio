import { buildKnowledge } from '../../src/data/knowledge.js'
import { profile } from '../../src/data/content.js'

export const config = { path: '/api/chat' }

const MAX_HISTORY = 10
const MAX_CHARS = 1000
const RATE_LIMIT = 20 // requests per minute per IP (per function instance)
const hits = new Map()

const SYSTEM_PROMPT = `You are "Vinit's assistant", a friendly chatbot embedded on the personal portfolio website of ${profile.fullName}.
Answer questions about Vinit using ONLY the profile below. Speak about Vinit in the third person ("he", "Vinit").
Keep answers short and conversational: two to four sentences, plain text, no markdown headings, no bullet lists unless the user asks for a list.
If a question cannot be answered from the profile, say you do not have that information and suggest emailing Vinit at ${profile.email}.
Never invent employers, dates, numbers or skills that are not in the profile. Politely decline unrelated requests (code generation, essays, other people) and steer back to Vinit's work.
Do not use em dashes.

PROFILE:
${buildKnowledge(process.env.URL || 'https://vgirkar.netlify.app')}`

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })

function sanitize(messages) {
  if (!Array.isArray(messages)) return []
  return messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, MAX_CHARS) }))
}

function rateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip) || { count: 0, reset: now + 60_000 }
  if (now > entry.reset) {
    entry.count = 0
    entry.reset = now + 60_000
  }
  entry.count += 1
  hits.set(ip, entry)
  if (hits.size > 5000) hits.clear()
  return entry.count > RATE_LIMIT
}

async function callGroq(messages, apiKey) {
  const models = [process.env.GROQ_MODEL, 'llama-3.3-70b-versatile', 'llama-3.1-8b-instant'].filter(Boolean)
  let lastError
  for (const model of models) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        max_tokens: 350,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    })
    if (res.ok) {
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content?.trim()
      if (reply) return { reply, provider: `groq/${model}` }
    }
    lastError = { status: res.status, body: (await res.text()).slice(0, 300) }
    if (res.status === 429 || res.status === 401) break
  }
  throw Object.assign(new Error('groq_failed'), lastError)
}

async function callGemini(messages, apiKey, baseUrl) {
  const model = process.env.GEMINI_MODEL || 'gemini-flash-lite-latest'
  const base = (baseUrl || 'https://generativelanguage.googleapis.com').replace(/\/$/, '')
  const res = await fetch(`${base}/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      generationConfig: { temperature: 0.3, maxOutputTokens: 350 },
    }),
  })
  if (!res.ok) throw Object.assign(new Error('gemini_failed'), { status: res.status, body: (await res.text()).slice(0, 300) })
  const data = await res.json()
  const reply = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('').trim()
  if (!reply) throw new Error('gemini_empty')
  return { reply, provider: `gemini/${model}` }
}

export default async (req, context) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

  const ip = context?.ip || req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || 'unknown'
  if (rateLimited(ip)) return json({ error: 'rate_limited' }, 429)

  let body
  try {
    body = await req.json()
  } catch {
    return json({ error: 'bad_json' }, 400)
  }
  const messages = sanitize(body?.messages)
  if (!messages.length || messages[messages.length - 1].role !== 'user') return json({ error: 'no_user_message' }, 400)

  // Provider selection, cheapest first:
  // 1. GROQ_API_KEY (Groq free tier, no card) set by the site owner.
  // 2. GEMINI_API_KEY. Netlify's AI Gateway auto-injects one together with
  //    GOOGLE_GEMINI_BASE_URL and bills it against Netlify credits, so that
  //    path is only used when USE_NETLIFY_AI_GATEWAY=1 is set explicitly.
  // 3. Otherwise 503 and the widget falls back to its built-in answers.
  const groqKey = process.env.GROQ_API_KEY
  const geminiKey = process.env.GEMINI_API_KEY
  const gatewayUrl = process.env.GOOGLE_GEMINI_BASE_URL
  const useGateway = process.env.USE_NETLIFY_AI_GATEWAY === '1'
  const geminiAllowed = Boolean(geminiKey) && (useGateway || !gatewayUrl)
  if (!groqKey && !geminiAllowed) return json({ error: 'no_provider' }, 503)

  try {
    const result = groqKey ? await callGroq(messages, groqKey) : await callGemini(messages, geminiKey, useGateway ? gatewayUrl : undefined)
    return json(result)
  } catch (err) {
    console.error('chat function error', err.message, err.status, err.body)
    const status = err.status === 429 ? 429 : 502
    return json({ error: err.status === 429 ? 'rate_limited' : 'provider_error' }, status)
  }
}
