import { Bot, Building2, School, Briefcase, Route, Trophy, Smartphone, Sparkles, Code2, PenLine } from 'lucide-react'
import essayscore from '../assets/essayscore.jpg'

export const profile = {
  name: 'Vinit Girkar',
  fullName: 'Vinit Vilas Girkar',
  role: 'AI Engineer & Full-stack Developer',
  currently: { title: 'AI Engineer', company: 'Optivaize' },
  email: 'vgirkar18@gmail.com',
  phoneDisplay: '+1 980 287 9871',
  whatsapp: 'https://wa.me/19802879871',
  linkedinHandle: 'in/vgirkar',
  cv: 'https://docs.google.com/document/d/1MQG9O8r1h4uYTmLFSad5gOOQgxTKd9jmc_kIaXaGmfI/edit?tab=t.0',
  socials: {
    github: 'https://github.com/vgirkar',
    linkedin: 'https://www.linkedin.com/in/vgirkar/',
    x: 'https://twitter.com/vgirkar18',
    instagram: 'https://www.instagram.com/vinitgirkar01/',
    leetcode: 'https://leetcode.com/u/hazelsnake02/',
  },
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years of experience' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 2, suffix: '', label: 'Degrees in CS & IT' },
]

export const toolbox = ['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'Rust', 'AWS', 'PostgreSQL']

export const skillGroups = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'Rust', 'Kotlin', 'HTML', 'CSS'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Semantic UI'] },
  { name: 'Backend', items: ['Node.js', 'FastAPI', 'Django', 'Spring Boot', 'GraphQL'] },
  { name: 'Cloud & Data', items: ['AWS', 'Azure', 'PostgreSQL', 'MongoDB'] },
]

export const experience = [
  {
    role: 'AI Engineer',
    company: 'Optivaize',
    location: 'Remote',
    period: 'Dec 2025 - Present',
    icon: Bot,
    tags: ['LLM agents', 'Orchestration', 'Evals'],
    bullets: [
      'Designed and implemented agentic AI workflows using LLM-based agents capable of autonomous task planning, tool usage and multi-step reasoning to automate complex business processes.',
      'Built and optimized multi-agent orchestration systems integrating APIs, knowledge retrieval and external tools for context-aware, scalable AI automation.',
      'Developed production-ready AI agents with guardrails, evaluation frameworks and monitoring to ensure reliability, safety and continuous improvement.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Amazon',
    location: 'United States',
    period: 'Sep 2022 - Sep 2024',
    icon: Building2,
    tags: ['Kata DSL', 'TypeScript', 'AWS CDK'],
    bullets: [
      'Led design and development of new features in Kata DSL, reducing UI component development time by 30%.',
      'Directed the upgrade of the TypeScript-to-Kata compiler, reducing integration issues by 40%.',
      'Implemented a robust error recovery framework for JavaScript rendering, reducing customer-facing errors by 90%.',
      'Collaborated with cross-functional teams to keep services highly scalable and reliable, and automated AWS infrastructure with CDK.',
    ],
  },
  {
    role: 'Graduate Teaching Assistant',
    company: 'UNC Charlotte',
    location: 'United States',
    period: 'Feb 2021 - Aug 2022',
    icon: School,
    tags: ['Data structures', 'Algorithms', 'Teaching'],
    bullets: [
      'Assisted in teaching Data Structures and Algorithms.',
      'Orchestrated engaging learning experiences and fostered collaborative environments.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Suven Consultants',
    location: 'India',
    period: 'Aug 2019 - Dec 2019',
    icon: Briefcase,
    tags: ['Backend', 'Automation', 'Fintech'],
    bullets: [
      'Improved loan assessment accuracy by integrating custom amortization algorithms.',
      'Automated CAM reports, reducing credit approval process time by 80%.',
      'Developed scalable backend solutions to handle large datasets.',
    ],
  },
]

export const projects = [
  {
    title: 'Automated Essay Evaluation',
    tagline: 'EssayScore',
    description: 'Grades essays instantly with transformer and NLTK models, flags spelling errors and keeps a history of past submissions. Flask API over PostgreSQL.',
    tech: ['scikit-learn', 'NLTK', 'Transformers', 'TensorFlow', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/vgirkar/Essay_Grading',
    image: essayscore,
    icon: PenLine,
    hue: 150,
    featured: true,
  },
  {
    title: 'RouteSpotter',
    tagline: 'MERN application',
    description: 'Full-stack web app on the MERN stack with Redux state management and a Material UI interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Material UI'],
    github: 'https://github.com/vgirkar/Route-Spotter',
    icon: Route,
    hue: 205,
  },
  {
    title: 'IPL Prediction System',
    tagline: 'Machine learning',
    description: 'Predicts IPL cricket match outcomes with XGBoost and scikit-learn models, served through a Flask app backed by SQLite.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Flask', 'SQLite'],
    github: 'https://github.com/vgirkar/IPL-Prediction-System',
    icon: Trophy,
    hue: 35,
  },
  {
    title: 'PostSphere',
    tagline: 'Android app',
    description: 'A clean, modern posts app for Android: OkHttp networking, RecyclerView feeds, JSON parsing and background threads with main-thread UI updates.',
    tech: ['Java', 'Android', 'OkHttp', 'RecyclerView', 'Postman'],
    github: 'https://github.com/vgirkar/Mobile-Application-Development',
    icon: Smartphone,
    hue: 265,
  },
  {
    title: 'Portfolio',
    tagline: 'This site',
    description: 'The site you are looking at: React 19 on Vite with Motion animations, a bento layout, light and dark themes and an EmailJS contact form.',
    tech: ['React', 'Vite', 'Motion', 'CSS'],
    github: 'https://github.com/vgirkar/My_Portfolio',
    icon: Sparkles,
    hue: 85,
  },
  {
    title: 'LeetCode',
    tagline: 'Problem solving',
    description: 'Ongoing algorithm and data structure practice in Java and Python.',
    tech: ['Java', 'Python', 'Algorithms'],
    github: 'https://leetcode.com/u/hazelsnake02/',
    linkLabel: 'Profile',
    icon: Code2,
    hue: 0,
    wide: true,
  },
]

export const education = [
  { degree: 'Master of Science in Computer Science', school: 'University of North Carolina at Charlotte', period: '2021 - 2022', place: 'Charlotte, USA' },
  { degree: 'Bachelor of Engineering in Information Technology', school: 'University of Mumbai', period: '2015 - 2019', place: 'Mumbai, India' },
  { degree: 'Higher Secondary Education', school: 'Khalsa College', period: '2013 - 2015', place: 'Mumbai, India' },
]

export const emailjsConfig = {
  serviceId: 'service_siwwkim',
  templateId: 'template_8qtoqh7',
  publicKey: 'HKRtko4UeD3YHsmPl',
}
