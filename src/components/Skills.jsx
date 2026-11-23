import { skillGroups } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Reveal, Stagger, Item } from './ui/motion'
import './skills.css'

const all = skillGroups.flatMap((g) => g.items)
const rowA = all
const rowB = [...all].reverse()

function Marquee({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="chip chip--lg marquee__chip">
            <i />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--tight">
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title={
            <>
              The <em>toolkit</em> I reach for.
            </>
          }
          lede="Languages, frameworks and platforms I have shipped with, from Kotlin and TypeScript front ends to Go, Python and Rust services on AWS and Azure."
        />
      </div>

      <Reveal className="skills__marquees" delay={0.1}>
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </Reveal>

      <div className="container">
        <Stagger className="skills__groups">
          {skillGroups.map((g, i) => (
            <Item key={g.name}>
              <Card className="card__pad skills__group card--lift">
                <div className="skills__group-head">
                  <span className="mono skills__index">0{i + 1}</span>
                  <h3>{g.name}</h3>
                </div>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
