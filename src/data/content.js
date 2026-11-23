// Pure data, no imports: shared by the site and the chatbot function.
export const profile = {
  name: 'Vinit Girkar',
  fullName: 'Vinit Vilas Girkar',
  role: 'AI / Software Engineer',
  currently: { title: 'AI / Software Engineer', company: 'Optivaize' },
  location: 'Mumbai, India',
  email: 'vgirkar20@gmail.com',
  phoneDisplay: '+91 93722 05092',
  phoneTel: '+919372205092',
  whatsapp: 'https://wa.me/919372205092',
  linkedinHandle: 'in/vgirkar',
  cv: '/Vinit-Girkar-Resume.pdf',
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
  { value: 4, suffix: '', label: 'Years of experience' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 2, suffix: '', label: 'Degrees in CS & IT' },
]

export const toolbox = ['Python', 'Go', 'TypeScript', 'React', 'FastAPI', 'LangGraph', 'Docker', 'AWS', 'PostgreSQL']

export const skillGroups = [
  {
    name: 'AI / ML',
    items: ['LLMs', 'RAG', 'Agentic workflows', 'LangChain', 'LangGraph', 'Embeddings', 'pgvector', 'Pinecone', 'Hybrid retrieval & reranking', 'Ragas', 'LLM-as-judge', 'Prompt-injection defense', 'PII handling'],
  },
  { name: 'Languages', items: ['Python', 'Go', 'Rust', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { name: 'Backend & APIs', items: ['FastAPI', 'REST', 'GraphQL', 'Spring Boot', 'Express.js', 'Node.js', '.NET', 'Microservices'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'ES6', 'HTML', 'CSS'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'Observability', 'Test-Driven Development', 'Agile'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
]

export const experience = [
  {
    role: 'AI / Software Engineer',
    company: 'Optivaize',
    location: 'Remote',
    period: 'Jan 2026 - Present',
    icon: 'Bot',
    tags: ['LLMs & RAG', 'LangGraph agents', 'FastAPI microservices', 'CI/CD'],
    bullets: [
      'Lead the design and production deployment of AI systems combining LLMs, RAG pipelines and agentic workflows, turning experimental capabilities into reliable services integrated into customer-facing products.',
      'Architected RAG pipelines end to end: ingestion, chunking, embedding, vector indexing (pgvector / Pinecone), hybrid retrieval and reranking, with measurable gains in answer faithfulness and retrieval precision.',
      'Built multi-agent workflows (LangChain / LangGraph) with tool use, memory and human-in-the-loop controls, integrated with enterprise systems via FastAPI microservices.',
      'Own the production path: Dockerized services, CI/CD pipelines, LLM observability (token usage, latency, cost per query) and evaluation frameworks (Ragas, LLM-as-judge), plus security and compliance practices for PII handling, prompt-injection defense and access control.',
      'Re-architected a real-time platform on a microservices backend (API Gateway, User, Transaction, Session, Game Orchestration), improving scalability, service isolation and deployment reliability.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Amazon, Shopping Foundation',
    location: 'United States',
    period: 'Sep 2022 - Sep 2024',
    icon: 'Building2',
    tags: ['Kata UI framework', 'TypeScript', 'Next.js'],
    bullets: [
      "Added new language features to Kata, Amazon's UI framework, reducing development time for complex UI components by 30%.",
      'Upgraded the TypeScript-based Kata compiler API to integrate with Next.js, enabling consistent builds across TypeScript versions and cutting frontend integration issues by 40%.',
      'Designed an error-recovery framework for the JS / Next.js rendering pipeline, improving fault tolerance and reducing runtime rendering errors by 90%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'CoverFox',
    location: 'India',
    period: 'Aug 2019 - Sep 2020',
    icon: 'Briefcase',
    tags: ['Python', 'Django', 'Fintech'],
    bullets: [
      'Built and integrated custom amortization algorithms in Python, improving loan-assessment accuracy and reducing calculation error rates by 20%.',
      'Implemented auto-generated Credit Approval Memorandum (CAM) reports with Django backend services, cutting credit-approval turnaround time by 80%.',
      'Scaled Django backend systems for large financial datasets via optimized queries and asynchronous workflows.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Suven Consultants',
    location: 'India',
    period: 'Aug 2019 - Dec 2019',
    icon: 'School',
    tags: ['Backend', 'Automation'],
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
    tagline: 'ML / NLP',
    description: 'ML pipeline that scores free-text essays: feature engineering and model training in Python with transformer and NLTK models, served through a Flask app on PostgreSQL.',
    tech: ['Python', 'scikit-learn', 'NLTK', 'Transformers', 'TensorFlow', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/vgirkar/Essay_Grading',
    image: 'essayscore',
    icon: 'PenLine',
    hue: 150,
    featured: true,
  },
  {
    title: 'RouteSpotter',
    tagline: 'Full-stack web app',
    description: 'Route discovery and mapping application with a data-driven backend, built on the MERN stack with Redux state management and a Material UI interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Material UI'],
    github: 'https://github.com/vgirkar/Route-Spotter',
    icon: 'Route',
    hue: 205,
  },
  {
    title: 'IPL Prediction System',
    tagline: 'Machine learning',
    description: 'Predicts IPL cricket match outcomes with XGBoost and scikit-learn models, served through a Flask app backed by SQLite.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Flask', 'SQLite'],
    github: 'https://github.com/vgirkar/IPL-Prediction-System',
    icon: 'Trophy',
    hue: 35,
  },
  {
    title: 'PostSphere',
    tagline: 'Android app',
    description: 'A clean, modern posts app for Android: OkHttp networking, RecyclerView feeds, JSON parsing and background threads with main-thread UI updates.',
    tech: ['Java', 'Android', 'OkHttp', 'RecyclerView', 'Postman'],
    github: 'https://github.com/vgirkar/Mobile-Application-Development',
    icon: 'Smartphone',
    hue: 265,
  },
  {
    title: 'Portfolio',
    tagline: 'This site',
    description: 'The site you are looking at: React 19 on Vite with Motion animations, a bento layout, light and dark themes, an EmailJS contact form and a profile chatbot running on a Netlify Function.',
    tech: ['React', 'Vite', 'Motion', 'Netlify Functions', 'CSS'],
    github: 'https://github.com/vgirkar/My_Portfolio',
    icon: 'Sparkles',
    hue: 85,
  },
  {
    title: 'LeetCode',
    tagline: 'Problem solving',
    description: 'Ongoing algorithm and data structure practice in Java and Python.',
    tech: ['Java', 'Python', 'Algorithms'],
    github: 'https://leetcode.com/u/hazelsnake02/',
    linkLabel: 'Profile',
    icon: 'Code2',
    hue: 0,
    wide: true,
  },
]

export const education = [
  { degree: 'Master of Science in Computer Science', school: 'University of North Carolina at Charlotte', period: 'Jan 2021 - Aug 2022', place: 'Charlotte, USA' },
  { degree: 'Bachelor of Engineering in Information Technology', school: 'University of Mumbai', period: 'Jul 2015 - Jun 2019', place: 'Mumbai, India' },
  { degree: 'Higher Secondary Education', school: 'Khalsa College', period: '2013 - 2015', place: 'Mumbai, India' },
]

export const emailjsConfig = {
  serviceId: 'service_siwwkim',
  templateId: 'template_8qtoqh7',
  publicKey: 'HKRtko4UeD3YHsmPl',
}
