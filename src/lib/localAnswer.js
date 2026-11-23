import { profile, skillGroups, experience, projects, education, stats } from '../data/content'
import { ABOUT_TEXT } from '../data/knowledge'

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9+#. ]/g, ' ')

function experienceAt(company) {
  const job = experience.find((j) => j.company.toLowerCase().includes(company))
  if (!job) return null
  return `Vinit was ${job.role} at ${job.company} (${job.period}). ${job.bullets.slice(0, 2).join(' ')}`
}

const intents = [
  {
    keys: ['hi', 'hello', 'hey', 'yo', 'good morning', 'good evening'],
    exact: true,
    answer: () => `Hi! I'm Vinit's assistant. Ask me about his experience, skills, projects, education or how to get in touch.`,
  },
  { keys: ['amazon', 'kata', 'sde'], answer: () => experienceAt('amazon') },
  { keys: ['optivaize', 'current', 'currently', 'now', 'today', 'ai engineer', 'agents', 'llm'], answer: () => experienceAt('optivaize') },
  { keys: ['suven', 'intern', 'internship'], answer: () => experienceAt('suven') },
  { keys: ['teaching', 'assistant', 'ta ', 'unc charlotte', 'uncc'], answer: () => experienceAt('unc') },
  {
    keys: ['experience', 'worked', 'work history', 'career', 'jobs', 'roles', 'companies', 'employer', 'resume', 'cv', 'background'],
    answer: () =>
      `Vinit has ${stats[0].value}+ years of experience: ` +
      experience.map((j) => `${j.role} at ${j.company} (${j.period})`).join('; ') +
      `. His full CV is at ${profile.cv}`,
  },
  {
    keys: ['skill', 'skills', 'stack', 'technolog', 'languages', 'language', 'framework', 'tools', 'know', 'proficient', 'react', 'python', 'typescript', 'go ', 'golang', 'rust', 'java', 'kotlin', 'aws', 'azure', 'cloud', 'database', 'postgres', 'mongo', 'node', 'next', 'tailwind', 'fastapi', 'django', 'spring', 'graphql'],
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
    answer: () => `You can email Vinit at ${profile.email}, message him on WhatsApp at ${profile.phoneDisplay}, or connect on LinkedIn: ${profile.socials.linkedin}`,
  },
  {
    keys: ['remote', 'relocate', 'relocation', 'on-site', 'onsite', 'location', 'based', 'where', 'live', 'country', 'city'],
    answer: () => `Vinit is open to remote or on-site work. He studied and worked in the United States (UNC Charlotte, Amazon) and started his career in India. For specifics, email him at ${profile.email}`,
  },
  {
    keys: ['leetcode', 'algorithm', 'dsa', 'competitive', 'coding practice'],
    answer: () => `Vinit practises algorithms and data structures in Java and Python on LeetCode: ${profile.socials.leetcode}`,
  },
  { keys: ['who', 'about', 'vinit', 'yourself', 'introduce', 'bio', 'summary', 'tell me'], answer: () => ABOUT_TEXT },
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
