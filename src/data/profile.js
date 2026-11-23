import { Bot, Building2, School, Briefcase, Route, Trophy, Smartphone, Sparkles, Code2, PenLine } from 'lucide-react'
import essayscore from '../assets/essayscore.jpg'
import * as content from './content'

const icons = { Bot, Building2, School, Briefcase, Route, Trophy, Smartphone, Sparkles, Code2, PenLine }
const images = { essayscore }

export const { profile, navLinks, stats, toolbox, skillGroups, education, emailjsConfig } = content
export const experience = content.experience.map((job) => ({ ...job, icon: icons[job.icon] }))
export const projects = content.projects.map((p) => ({ ...p, icon: icons[p.icon], image: p.image ? images[p.image] : undefined }))
