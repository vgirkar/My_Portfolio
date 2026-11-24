import { skillGroups } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Reveal, Stagger, Item } from './ui/motion'
import './skills.css'

const half = Math.ceil(skillGroups.length / 2)
const rowA = skillGroups.slice(0, half).flatMap((g) => g.items)
const rowB = skillGroups.slice(half).flatMap((g) => g.items)

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
          lede="From LLM, RAG and voice or chat agents to Python, TypeScript and Go services on AWS, Azure and GCP: the languages, frameworks and platforms I have shipped with."
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
