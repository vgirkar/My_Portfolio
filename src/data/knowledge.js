import { profile, stats, toolbox, skillGroups, experience, projects, education } from './content.js'

export const ABOUT_TEXT =
  "Vinit Vilas Girkar is a Software Development Engineer with a Master's in Computer Science from the University of North Carolina at Charlotte. " +
  'He has a proven track record at Amazon and Suven Consultants delivering scalable, high-performance backend and frontend systems, and he now builds agentic AI products at Optivaize. ' +
  'He works across the stack with React, TypeScript, Go, Rust and Python on AWS and Azure, thrives in fast-paced teams, turns UX designs into reliable reusable modules, and cares about operational excellence, test-driven development and strategic planning. ' +
  'He is open to remote or on-site work.'

export function buildKnowledge() {
  const lines = []
  lines.push(`# ${profile.fullName} (goes by ${profile.name})`)
  lines.push(`Role: ${profile.role}. Currently ${profile.currently.title} at ${profile.currently.company}.`)
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
  lines.push(`- Email: ${profile.email}`)
  lines.push(`- WhatsApp: ${profile.phoneDisplay} (${profile.whatsapp})`)
  lines.push(`- LinkedIn: ${profile.socials.linkedin}`)
  lines.push(`- GitHub: ${profile.socials.github}`)
  lines.push(`- X / Twitter: ${profile.socials.x}`)
  lines.push(`- Instagram: ${profile.socials.instagram}`)
  lines.push(`- LeetCode: ${profile.socials.leetcode}`)
  lines.push(`- CV / resume: ${profile.cv}`)
  return lines.join('\n')
}
