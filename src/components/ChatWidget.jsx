import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { MessageCircle, X, Send, Sparkles, RotateCcw } from 'lucide-react'
import { profile } from '../data/profile'
import { localAnswer } from '../lib/localAnswer'
import avatar from '../assets/vinit.png'
import './chat.css'

const INTRO = {
  role: 'assistant',
  content: `Hi, I'm Vinit's assistant. Ask me anything about his experience, skills, projects or how to reach him.`,
}

const SUGGESTIONS = ['What did Vinit do at Amazon?', 'Which technologies does he use?', 'What is he working on now?', 'How can I contact him?']

const STORAGE_KEY = 'vg-chat-v1'

function loadHistory() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return Array.isArray(parsed) && parsed.length ? parsed : [INTRO]
  } catch {
    return [INTRO]
  }
}

async function askServer(messages) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: messages.filter((m) => m !== INTRO).slice(-10) }),
  })
  const type = res.headers.get('content-type') || ''
  if (!type.includes('application/json')) throw new Error('not_json')
  const data = await res.json()
  if (!res.ok) throw Object.assign(new Error(data.error || 'error'), { code: data.error, status: res.status })
  return data
}

export default function ChatWidget() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [hint, setHint] = useState(false)
  const [messages, setMessages] = useState(loadHistory)
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [mode, setMode] = useState('ai')
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setHint(true), 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      /* ignore */
    }
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, busy])

  useEffect(() => {
    if (!open) return
    setHint(false)
    const t = setTimeout(() => inputRef.current?.focus(), 250)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const send = async (text) => {
    const question = (text ?? input).trim()
    if (!question || busy) return
    setInput('')
    const next = [...messages, { role: 'user', content: question }]
    setMessages(next)
    setBusy(true)
    try {
      const data = await askServer(next)
      setMode('ai')
      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch (err) {
      if (err.code === 'rate_limited') {
        setMessages([...next, { role: 'assistant', content: 'I am getting a lot of questions right now. Give me a minute and try again.' }])
      } else {
        setMode('basic')
        setMessages([...next, { role: 'assistant', content: localAnswer(question) }])
      }
    } finally {
      setBusy(false)
    }
  }

  const reset = () => {
    setMessages([INTRO])
    setMode('ai')
  }

  const showSuggestions = messages.length <= 1

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            key="panel"
            className="chat"
            role="dialog"
            aria-label="Chat with Vinit's assistant"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="chat__head">
              <img src={avatar} alt="" className="chat__avatar" width="40" height="40" />
              <div className="chat__title">
                <strong>Vinit&apos;s assistant</strong>
                <span>
                  <i className="chat__dot" /> {mode === 'ai' ? 'Online, answers from his profile' : 'Basic mode, answers from his profile'}
                </span>
              </div>
              <button className="chat__iconbtn" onClick={reset} aria-label="Start over" title="Start over">
                <RotateCcw size={16} />
              </button>
              <button className="chat__iconbtn" onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </header>

            <div className="chat__list" ref={listRef} aria-live="polite">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`chat__msg chat__msg--${m.role}`}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {m.content}
                </motion.div>
              ))}
              {busy && (
                <div className="chat__msg chat__msg--assistant chat__typing" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {showSuggestions && !busy && (
                <div className="chat__suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} className="chip chat__chip" onClick={() => send(s)}>
                      <Sparkles size={12} /> {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              className="chat__form"
              onSubmit={(e) => {
                e.preventDefault()
                send()
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vinit..."
                maxLength={500}
                aria-label="Your question"
                autoComplete="off"
              />
              <button type="submit" className="chat__send" disabled={!input.trim() || busy} aria-label="Send">
                <Send size={16} />
              </button>
            </form>
            <p className="chat__foot">
              Answers are generated from Vinit&apos;s profile and may be imperfect. For anything important, email{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="chat__launcher">
        <AnimatePresence>
          {hint && !open && (
            <motion.button
              key="hint"
              className="chat__hint"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.3 }}
            >
              Ask me anything about Vinit
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          className={`chat__fab ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          whileHover={reduce ? {} : { scale: 1.06 }}
          whileTap={reduce ? {} : { scale: 0.94 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? 'x' : 'chat'} initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
              {open ? <X size={22} /> : <MessageCircle size={22} />}
            </motion.span>
          </AnimatePresence>
          {!open && <span className="chat__fab-ring" aria-hidden="true" />}
        </motion.button>
      </div>
    </>
  )
}
