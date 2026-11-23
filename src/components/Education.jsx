import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Stagger, Item } from './ui/motion'
import './education.css'

export default function Education() {
  return (
    <section id="education" className="section section--tight">
      <div className="container">
        <SectionHead
          eyebrow="Education"
          title={
            <>
              Where I <em>learned</em> the fundamentals.
            </>
          }
        />
        <Stagger className="education">
          {education.map((e, i) => (
            <Item key={e.degree}>
              <Card className="card__pad education__card card--lift">
                <div className="education__top">
                  <span className="education__icon">
                    <GraduationCap size={20} />
                  </span>
                  <span className={`chip ${i === 0 ? 'chip--accent' : ''}`}>{e.period}</span>
                </div>
                <h3>{e.degree}</h3>
                <p className="education__school">{e.school}</p>
                <p className="education__place">
                  <MapPin size={12} /> {e.place}
                </p>
              </Card>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
