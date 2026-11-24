import { profile, skillGroups, experience, projects, education, stats } from '../data/content'
import { ABOUT_TEXT, jobTitle } from '../data/knowledge'

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9+#. ]/g, ' ')

function experienceAt(company) {
  const job = experience.find((j) => j.company.toLowerCase().includes(company))
  if (!job) return null
  const verb = /present/i.test(job.period) ? 'is' : 'was'
  return `Vinit ${verb} ${jobTitle(job)} (${job.period}). ${job.bullets.slice(0, 2).join(' ')}`
}

function careerBreak() {
  const gap = experience.find((j) => j.note)
  if (!gap) return null
  return `Vinit took a career break from ${gap.period.replace(' - ', ' to ')}: ${gap.bullets[0]} He then worked as a freelance software engineer for SkillPvP Games and joined Optivaize in January 2026.`
}

const intents = [
  {
    keys: ['hi', 'hello', 'hey', 'yo', 'good morning', 'good evening'],
    exact: true,
    answer: () => `Hi! I'm Vinit's assistant. Ask me about his experience, skills, projects, education or how to get in touch.`,
  },
  { keys: ['amazon', 'kata', 'sde'], answer: () => experienceAt('amazon') },
  {
    keys: ['optivaize', 'current', 'currently', 'now', 'today', 'ai engineer', 'agents', 'agentic', 'llm', 'rag', 'retrieval', 'langchain', 'langgraph', 'microservice', 'voice agent', 'chat agent', 'chatbot', 'leads', 'svg', 'netherlands'],
    answer: () => experienceAt('optivaize'),
  },
  { keys: ['skillpvp', 'skill pvp', 'freelance', 'freelancer', 'gaming', 'game'], answer: () => experienceAt('skillpvp') },
  { keys: ['career break', 'break', 'gap', 'accident', 'layoff', 'laid off', 'leave amazon', 'left amazon', 'after amazon'], answer: careerBreak },
  { keys: ['coverfox', 'cover fox', 'loan', 'fintech', 'django', 'amortization'], answer: () => experienceAt('coverfox') },
  { keys: ['suven', 'intern', 'internship'], answer: () => experienceAt('suven') },
  {
    keys: ['experience', 'worked', 'work history', 'career', 'jobs', 'roles', 'companies', 'employer', 'resume', 'cv', 'background'],
    answer: () =>
      `Vinit has ${stats[0].value}${stats[0].suffix} years of experience: ` +
      experience.map((j) => `${jobTitle(j)} (${j.period})`).join('; ') +
      `. His full CV is at ${window.location.origin}${profile.cv}`,
  },
  {
    keys: ['skill', 'skills', 'stack', 'technolog', 'languages', 'language', 'framework', 'tools', 'know', 'proficient', 'react', 'python', 'typescript', 'go ', 'golang', 'java', 'c++', 'sql', 'aws', 'azure', 'gcp', 'cloud', 'database', 'postgres', 'mysql', 'mongo', 'node', 'next', 'fastapi', 'spring', 'graphql', 'pinecone', 'pgvector', 'docker'],
    answer: () => skillGroups.map((g) => `${g.name}: ${g.items.join(', ')}`).join('. ') + '.',
  },
  {
    keys: ['education', 'degree', 'university', 'college', 'master', 'masters', 'bachelor', 'study', 'studied', 'school', 'graduate'],
    answer: () => education.map((e) => `${e.degree} from ${e.school} (${e.period})`).join('; ') + '.',
  },
  {
    keys: ['project', 'projects', 'built', 'build', 'portfolio', 'github', 'repo', 'open source', 'side project'],
    answer: () =>
      `Some of Vinit's projects: ` +
      projects
        .filter((p) => !p.wide)
        .map((p) => `${p.title} (${p.tech.slice(0, 3).join(', ')})`)
        .join('; ') +
      `. Source code is on GitHub: ${profile.socials.github}`,
  },
  {
    keys: ['contact', 'email', 'mail', 'reach', 'hire', 'hiring', 'phone', 'whatsapp', 'call', 'linkedin', 'connect', 'message', 'talk', 'touch'],
    answer: () => `You can email Vinit at ${profile.email}, call or WhatsApp him at ${profile.phoneDisplay}, or connect on LinkedIn: ${profile.socials.linkedin}`,
  },
  {
    keys: ['remote', 'relocate', 'relocation', 'on-site', 'onsite', 'location', 'based', 'where', 'live', 'country', 'city', 'mumbai', 'india'],
    answer: () =>
      `Vinit is based in ${profile.location} and is open to remote or on-site work. He studied and worked in the United States (UNC Charlotte, Amazon), moved back to India in June 2025 and currently works remotely for Optivaize in the Netherlands. For specifics, email him at ${profile.email}`,
  },
  {
    keys: ['leetcode', 'algorithm', 'dsa', 'competitive', 'coding practice'],
    answer: () => `Vinit practises algorithms and data structures in Java and Python on LeetCode: ${profile.socials.leetcode}`,
  },
  // Generic intro: only used when no specific intent matched ("tell me about Coverfox" must hit Coverfox).
  { keys: ['who', 'about', 'vinit', 'yourself', 'introduce', 'bio', 'summary', 'tell me'], fallback: true, answer: () => ABOUT_TEXT },
]

export function localAnswer(question) {
  const q = ` ${norm(question)} `
  // Direct project name match first
  for (const p of projects) {
    if (q.includes(p.title.toLowerCase().split(' ')[0]) && p.title.length > 3) {
      return `${p.title}: ${p.description} Tech: ${p.tech.join(', ')}. Link: ${p.github}`
    }
  }
  let best = null
  let bestScore = 0
  for (const intent of intents) {
    if (intent.fallback && bestScore > 0) continue
    let score = 0
    for (const k of intent.keys) {
      if (intent.exact ? q.trim() === k || q.trim().startsWith(k + ' ') : q.includes(k)) score += k.length > 4 ? 2 : 1
    }
    if (score > bestScore) {
      bestScore = score
      best = intent
    }
  }
  const answer = best ? best.answer() : null
  return answer || `I'm not sure about that one. You can ask me about Vinit's experience, skills, projects, education or how to contact him, or email him directly at ${profile.email}`
}
