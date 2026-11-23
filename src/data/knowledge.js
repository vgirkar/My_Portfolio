import { profile, stats, toolbox, skillGroups, experience, projects, education } from './content.js'

export const ABOUT_TEXT =
  "Vinit Vilas Girkar is a Software / AI Engineer based in Mumbai, India, with a Master's in Computer Science from the University of North Carolina at Charlotte and a track record of building scalable, production-grade distributed systems across backend and full stack. " +
  'He previously worked at Amazon (Shopping Foundation) and CoverFox, and currently leads the design and production deployment of AI-powered, microservices-based systems at Optivaize: LLM and retrieval-augmented generation (RAG) pipelines, agentic workflows, Dockerized services and CI/CD. ' +
  'He is strong in Python, Go and cloud-native architecture, takes end-to-end ownership from system design to production, and is open to remote or on-site work.'

export function buildKnowledge(baseUrl = '') {
  const lines = []
  lines.push(`# ${profile.fullName} (goes by ${profile.name})`)
  lines.push(`Role: ${profile.role}. Currently ${profile.currently.title} at ${profile.currently.company}. Based in ${profile.location}.`)
  lines.push(ABOUT_TEXT)
  lines.push('')
  lines.push('## Quick facts')
  stats.forEach((s) => lines.push(`- ${s.value}${s.suffix} ${s.label}`))
  lines.push(`- Daily toolbox: ${toolbox.join(', ')}`)
  lines.push('')
  lines.push('## Skills')
  skillGroups.forEach((g) => lines.push(`- ${g.name}: ${g.items.join(', ')}`))
  lines.push('')
  lines.push('## Work experience (most recent first)')
  experience.forEach((job) => {
    lines.push(`### ${job.role} at ${job.company} (${job.location}), ${job.period}`)
    job.bullets.forEach((b) => lines.push(`- ${b}`))
  })
  lines.push('')
  lines.push('## Projects')
  projects.forEach((p) => {
    lines.push(`### ${p.title} (${p.tagline})`)
    lines.push(p.description)
    lines.push(`Tech: ${p.tech.join(', ')}. Link: ${p.github}`)
  })
  lines.push('')
  lines.push('## Education')
  education.forEach((e) => lines.push(`- ${e.degree}, ${e.school}, ${e.place}, ${e.period}`))
  lines.push('')
  lines.push('## Contact and links')
  lines.push(`- Location: ${profile.location}`)
  lines.push(`- Email: ${profile.email}`)
  lines.push(`- Phone / WhatsApp: ${profile.phoneDisplay} (${profile.whatsapp})`)
  lines.push(`- LinkedIn: ${profile.socials.linkedin}`)
  lines.push(`- GitHub: ${profile.socials.github}`)
  lines.push(`- X / Twitter: ${profile.socials.x}`)
  lines.push(`- Instagram: ${profile.socials.instagram}`)
  lines.push(`- LeetCode: ${profile.socials.leetcode}`)
  lines.push(`- CV / resume: ${profile.cv.startsWith('/') ? baseUrl + profile.cv : profile.cv}`)
  return lines.join('\n')
}
