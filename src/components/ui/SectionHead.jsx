import { Reveal } from './motion'

export default function SectionHead({ eyebrow, title, lede, align = 'left' }) {
  return (
    <Reveal className={`section__head section__head--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  )
}
