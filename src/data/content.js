// Pure data, no imports: shared by the site and the chatbot function.
export const profile = {
  name: 'Vinit Girkar',
  fullName: 'Vinit Vilas Girkar',
  role: 'AI & Backend Software Engineer',
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

export const toolbox = ['Python', 'TypeScript', 'Go', 'FastAPI', 'LangGraph', 'React', 'Next.js', 'Docker', 'AWS', 'PostgreSQL']

export const skillGroups = [
  {
    name: 'AI / ML',
    items: [
      'LLMs',
      'RAG',
      'Conversational & voice AI agents',
      'Multi-agent workflows',
      'LangChain',
      'LangGraph',
      'Embeddings',
      'Vector search',
      'pgvector',
      'Pinecone',
      'Hybrid retrieval',
      'Reranking',
      'LLM evaluation (Ragas, LLM-as-judge)',
      'Prompt engineering',
      'Prompt-injection defense',
    ],
  },
  { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'C++', 'SQL'] },
  { name: 'Backend', items: ['FastAPI', 'Django', 'Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'GraphQL', 'Microservices', 'Asynchronous processing'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'Git', 'LLM observability', 'Test-driven development', 'Agile'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
]

// Entries with `note: true` render as a compact timeline note instead of a full card.
export const experience = [
  {
    role: 'AI / Software Engineer',
    company: 'Optivaize',
    location: 'Netherlands (Remote)',
    period: 'Jan 2026 - Present',
    icon: 'Bot',
    tags: ['LLMs & RAG', 'Voice & chat agents', 'LangGraph', 'FastAPI microservices', 'Docker & CI/CD'],
    bullets: [
      'Led design and production deployment of LLM systems (RAG and agentic workflows) for customer-facing products.',
      'Built a customer-service voice and chat AI agent across four channels (inbound and outbound phone, WhatsApp, website chat) and guided an intern in turning it into a multi-tenant product.',
      'Built a pipeline that ingests sales leads by API polling and WhatsApp webhook, with rule-based de-duplication of repeat enquiries.',
      "Built a design tool's full web application, including an in-browser SVG editor and vector export.",
      'Built RAG pipelines end to end in Python: ingestion, chunking, embedding, vector indexing on pgvector and Pinecone, hybrid retrieval and reranking, improving answer faithfulness and retrieval precision as measured with Ragas.',
      'Developed multi-agent workflows in LangChain and LangGraph with tool use, memory and human-in-the-loop approval, exposed to enterprise systems through FastAPI microservices.',
      'Shipped with Docker and CI/CD; added LLM observability (token usage, latency, cost per query), Ragas and LLM-as-judge evaluation, PII handling, prompt-injection defense and access control.',
    ],
    link: { label: 'Harbor: open-source reference implementation of this RAG and agent stack', href: 'https://github.com/vgirkar/harbor' },
  },
  {
    role: 'Freelance Software Engineer',
    company: 'SkillPvP Games',
    location: 'India (Remote)',
    period: 'Jul 2025 - Dec 2025',
    icon: 'Gamepad2',
    tags: ['Microservices', 'Real-time platform', 'Backend architecture'],
    bullets: [
      'Re-architected a real-time gaming platform into five backend microservices (API Gateway, User, Transaction, Session, Game Orchestration), improving scalability, service isolation and deployment reliability.',
    ],
  },
  {
    role: 'Career break',
    company: '',
    location: 'USA',
    period: 'Sep 2024 - Jun 2025',
    icon: 'Pause',
    note: true,
    tags: [],
    bullets: ['Recovery from an accident after a layoff; relocated to India in June 2025.'],
  },
  {
    role: 'Software Development Engineer',
    company: 'Amazon, Shopping Foundation',
    location: 'United States',
    period: 'Sep 2022 - Sep 2024',
    icon: 'Building2',
    tags: ['Kata UI framework', 'TypeScript', 'Next.js'],
    bullets: [
      "Cut development time for complex UI components 30% by adding language features to Kata, Amazon's UI framework.",
      'Cut frontend integration issues by 40% by upgrading the TypeScript-based Kata compiler API to integrate with Next.js, giving consistent builds across TypeScript versions.',
      'Reduced runtime rendering errors by 90% by designing an error-recovery framework for the JavaScript and Next.js rendering pipeline.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Coverfox',
    location: 'India',
    period: 'Aug 2019 - Sep 2020',
    icon: 'Briefcase',
    tags: ['Python', 'Django', 'Fintech'],
    bullets: [
      'Reduced loan calculation error rates by 20% by building custom amortization algorithms in Python for loan assessment.',
      'Cut credit-approval turnaround time by 80% by automating Credit Approval Memorandum (CAM) report generation with Django backend services.',
      'Scaled Django backends for large financial datasets through SQL query optimization and asynchronous workflows.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Suven Consultants',
    location: 'India',
    period: 'Sep 2017 - Dec 2017',
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
    title: 'Harbor',
    tagline: 'LangGraph · RAG · Voice',
    description: 'Production customer support assistant for an online store. Hybrid retrieval on pgvector and Postgres full-text search fused with RRF and reranked, a LangGraph multi-agent workflow on Claude with a groundedness verifier, order lookups through tools, push-to-talk voice, five layers of prompt-injection defence, and Ragas plus LLM-as-judge evaluation running in CI.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Claude', 'pgvector', 'Pinecone', 'FastAPI', 'Ragas', 'ElevenLabs', 'Docker'],
    github: 'https://github.com/vgirkar/harbor',
    image: 'harbor',
    icon: 'Bot',
    hue: 190,
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
    title: 'Automated Essay Evaluation',
    tagline: 'Python · ML · NLP',
    description: 'Scores free-text essays with machine learning and NLP: feature engineering and model training in Python with transformer and NLTK models, served through a Flask app on PostgreSQL.',
    tech: ['Python', 'scikit-learn', 'NLTK', 'Transformers', 'TensorFlow', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/vgirkar/Essay_Grading',
    image: 'essayscore',
    icon: 'PenLine',
    hue: 150,
    featured: true,
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
