import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion'
import { useInView } from 'motion/react'
import { ArrowUpRight, Mail, Wifi, Sparkles } from 'lucide-react'
import { profile, stats, toolbox } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Stagger, Item } from './ui/motion'
import './about.css'

function CountUp({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="About"
          title={
            <>
              Engineer by training, <em>builder</em> by habit.
            </>
          }
        />

        <Stagger className="bento">
          <Item className="bento__bio">
            <Card className="card__pad bento__card">
              <h3 className="bento__heading">
                Hi, I&apos;m <strong>{profile.fullName}</strong>.
              </h3>
              <p>
                I&apos;m a Software / AI Engineer with a Master&apos;s in Computer Science from the University of North Carolina at Charlotte and a track
                record of building scalable, production-grade distributed systems across backend and full stack. After Amazon and CoverFox, I now lead the
                design and deployment of AI-powered, microservices-based systems at Optivaize: LLM and RAG pipelines, agentic workflows, Dockerized services
                and CI/CD.
              </p>
              <p>
                I&apos;m strong in Python, Go and cloud-native architecture, and I take end-to-end ownership from system design to production, with
                test-driven development, observability and security built in from the start.
              </p>
              <ul className="chips bento__principles">
                <li className="chip chip--accent">End-to-end ownership</li>
                <li className="chip chip--accent">Test-driven</li>
                <li className="chip chip--accent">Cloud-native</li>
              </ul>
            </Card>
          </Item>

          <Item className="bento__stats">
            <Card className="card__pad bento__card">
              <ul className="stats">
                {stats.map((s) => (
                  <li key={s.label}>
                    <span className="stats__value">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </span>
                    <span className="stats__label">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Item>

          <Item className="bento__now">
            <Card className="card__pad bento__card">
              <span className="bento__label">
                <span className="pulse" /> Currently
              </span>
              <h3 className="bento__subhead">
                {profile.currently.title} at {profile.currently.company}
              </h3>
              <p className="muted">Leading LLM, RAG and multi-agent systems into production: FastAPI microservices, Docker, CI/CD, evaluation and observability.</p>
            </Card>
          </Item>

          <Item className="bento__tools">
            <Card className="card__pad bento__card">
              <span className="bento__label">
                <Sparkles size={14} /> Daily toolbox
              </span>
              <ul className="chips bento__toolchips">
                {toolbox.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </Item>

          <Item className="bento__connect">
            <Card className="card__pad bento__card bento__card--accent">
              <span className="bento__label">
                <Wifi size={14} /> {profile.location} · Remote or on-site
              </span>
              <h3 className="bento__subhead">Let&apos;s build something together.</h3>
              <a href={`mailto:${profile.email}`} className="bento__mail">
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight size={16} className="bento__mail-arrow" />
              </a>
            </Card>
          </Item>
        </Stagger>
      </div>
    </section>
  )
}
