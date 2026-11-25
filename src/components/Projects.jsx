import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { projects, profile } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Stagger, Item } from './ui/motion'
import './projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects__head">
          <SectionHead
            eyebrow="Projects"
            title={
              <>
                Things I&apos;ve <em>built</em>.
              </>
            }
            lede="Production LLM systems, applied machine learning, full-stack web apps and native mobile work. Source for each lives on GitHub."
          />
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn projects__all">
            <FaGithub /> All repositories <ArrowUpRight size={16} className="btn__icon" />
          </a>
        </div>

        <Stagger className="projects" gap={0.1}>
          {projects.map((p, i) => {
            const Icon = p.icon
            const isLeet = p.linkLabel === 'Profile'
            return (
              <Item key={p.title} as="div" className={p.featured ? 'project--featured' : p.wide ? 'project--wide' : ''}>
                <Card as="article" className={`project card--lift ${p.wide ? 'project--row' : ''}`} style={{ '--hue': p.hue }}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="project__cover" aria-label={`Open ${p.title}`}>
                    {p.image ? (
                      <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                    ) : (
                      <div className="project__art">
                        <span className="project__art-tile">
                          <Icon size={44} strokeWidth={1.4} />
                        </span>
                        <span className="project__index mono">0{i + 1}</span>
                      </div>
                    )}
                  </a>
                  <div className="project__body">
                    <div className="project__top">
                      <div>
                        <span className="project__tagline mono">{p.tagline}</span>
                        <h3>{p.title}</h3>
                      </div>
                      <div className="project__links">
                        <a href={p.github} target="_blank" rel="noreferrer" aria-label={isLeet ? 'LeetCode profile' : 'GitHub repository'} title={isLeet ? 'LeetCode profile' : 'GitHub repository'}>
                          {isLeet ? <SiLeetcode /> : <FaGithub />}
                        </a>
                        <a href={p.github} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="project__open">
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                    <p className="project__desc">{p.description}</p>
                    <ul className="chips project__tech">
                      {p.tech.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Item>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
