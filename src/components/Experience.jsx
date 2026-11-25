import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { MapPin } from 'lucide-react'
import { experience } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Reveal } from './ui/motion'
import './experience.css'

function TimelineNote({ job }) {
  const Icon = job.icon
  return (
    <Reveal className="timeline__item timeline__item--note" delay={0.05}>
      <span className="timeline__dot timeline__dot--muted" aria-hidden="true" />
      <div className="timeline__note">
        <span className="timeline__note-icon">
          <Icon size={16} />
        </span>
        <div className="timeline__note-body">
          <p className="timeline__note-title">
            {job.role}
            <span className="timeline__loc">
              <MapPin size={12} /> {job.location}
            </span>
          </p>
          <p className="timeline__note-text">{job.bullets[0]}</p>
        </div>
        <span className="chip timeline__date">{job.period}</span>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 70%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 })

  return (
    <section id="experience" className="section">
      <div className="container experience__grid">
        <div className="experience__intro">
          <SectionHead
            eyebrow="Experience"
            title={
              <>
                Where I&apos;ve <em>worked</em>.
              </>
            }
            lede="From an internship in Mumbai to Amazon, freelance backend work and now leading production AI systems at Optivaize. Each role taught me something different about building software people rely on."
          />
        </div>

        <div className="timeline" ref={ref}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div className="timeline__progress" style={{ scaleY }} />
          </div>

          {experience.map((job, i) => {
            if (job.note) return <TimelineNote key={job.role + job.period} job={job} />
            const Icon = job.icon
            return (
              <Reveal key={job.role + job.company} className="timeline__item" delay={0.05}>
                <span className="timeline__dot" aria-hidden="true" />
                <Card as="article" className="timeline__card card--lift">
                  <header className="timeline__head">
                    <span className="timeline__icon">
                      <Icon size={20} />
                    </span>
                    <div className="timeline__titles">
                      <h3>{job.role}</h3>
                      <p className="timeline__company">
                        {job.company}
                        <span className="timeline__loc">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </p>
                    </div>
                    <span className={`chip timeline__date ${i === 0 ? 'chip--accent' : ''}`}>{job.period}</span>
                  </header>
                  <ul className="timeline__bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {job.link && (
                    <a className="timeline__link" href={job.link.href} target="_blank" rel="noreferrer">
                      {job.link.label} <ArrowUpRight size={14} className="btn__icon" />
                    </a>
                  )}
                  <ul className="chips timeline__tags">
                    {job.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
