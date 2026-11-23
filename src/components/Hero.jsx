import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Briefcase, GraduationCap, Bot } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { profile } from '../data/profile'
import { EASE } from './ui/motion'
import portrait from '../assets/vinit.png'
import './hero.css'

const headline = [
  { t: 'I' },
  { t: 'build' },
  { t: 'AI', em: true },
  { t: 'agents', em: true },
  { t: 'and' },
  { t: 'the' },
  { t: 'systems' },
  { t: 'that' },
  { t: 'run' },
  { t: 'them.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }
const word = {
  hidden: { opacity: 0, y: '0.6em', rotateX: -30 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: EASE } },
}
const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
})

const socials = [
  { href: profile.socials.github, label: 'GitHub', Icon: FaGithub },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: profile.socials.x, label: 'X', Icon: FaXTwitter },
  { href: profile.socials.instagram, label: 'Instagram', Icon: FaInstagram },
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(60)
  const my = useMotionValue(30)
  const glow = useMotionTemplate`radial-gradient(700px circle at ${mx}% ${my}%, var(--glow), transparent 60%)`

  const onMove = (e) => {
    if (!ref.current || reduce) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <section className="hero" ref={ref} onPointerMove={onMove} aria-label="Introduction">
      <motion.div className="hero__glow" style={{ backgroundImage: glow }} aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div className="hero__status" {...rise(0.1)}>
            <span className="pulse" />
            <span>
              {profile.currently.title} at <strong>{profile.currently.company}</strong>
            </span>
          </motion.div>

          <motion.p className="hero__hello" {...rise(0.18)}>
            Hi, I&apos;m <span className="serif hero__name">Vinit Girkar</span>
          </motion.p>

          <motion.h1 className="hero__title" variants={container} initial="hidden" animate="show" aria-label="I build AI agents and the systems that run them.">
            {headline.map((w, i) => (
              <span className="hero__word-wrap" key={i} aria-hidden="true">
                <motion.span className={`hero__word ${w.em ? 'hero__word--em' : ''}`} variants={word}>
                  {w.t}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p className="hero__lede" {...rise(0.75)}>
            Software engineer with a Master&apos;s in Computer Science from UNC Charlotte. I shipped developer tooling and rendering infrastructure at
            Amazon, and now design production LLM agents at Optivaize. React, TypeScript, Go, Python and AWS are my daily tools.
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.9)}>
            <a href="#projects" className="btn btn--primary">
              See my work <ArrowDown size={16} className="btn__icon btn__icon--down" />
            </a>
            <a href={profile.cv} className="btn" target="_blank" rel="noreferrer">
              Download CV <ArrowUpRight size={16} className="btn__icon" />
            </a>
          </motion.div>

          <motion.ul className="hero__socials" {...rise(1.05)}>
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                  <Icon />
                </a>
              </li>
            ))}
            <li className="hero__socials-note mono">@vgirkar</li>
          </motion.ul>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 48, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          whileHover={{ rotate: 0, scale: 1.015 }}
        >
          <div className="hero__card">
            <img src={portrait} alt="Portrait of Vinit Girkar" width="800" height="800" fetchPriority="high" />
            <div className="hero__card-foot">
              <span className="hero__card-name">{profile.fullName}</span>
              <span className="hero__card-role mono">AI Engineer · ex-Amazon SDE</span>
            </div>
          </div>

          <motion.div className="hero__badge hero__badge--1" animate={reduce ? {} : { y: [0, -9, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}>
            <Briefcase size={14} /> ex-Amazon
          </motion.div>
          <motion.div className="hero__badge hero__badge--2" animate={reduce ? {} : { y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.6 }}>
            <GraduationCap size={14} /> MS CS · UNC Charlotte
          </motion.div>
          <motion.div className="hero__badge hero__badge--3" animate={reduce ? {} : { y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.1 }}>
            <Bot size={14} /> Building LLM agents
          </motion.div>
        </motion.div>
      </div>

      <motion.a href="#about" className="hero__scroll" {...rise(1.4)} aria-label="Scroll to about section">
        <span className="mono">scroll</span>
        <i />
      </motion.a>
    </section>
  )
}
