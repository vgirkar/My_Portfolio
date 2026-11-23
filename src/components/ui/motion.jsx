import { motion, useReducedMotion } from 'motion/react'

export const EASE = [0.22, 1, 0.36, 1]

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

const tags = { div: motion.div, li: motion.li, section: motion.section, article: motion.article, ul: motion.ul, p: motion.p }

export function Reveal({ as = 'div', delay = 0, y = 28, once = true, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = tags[as] || motion.div
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Stagger({ as = 'div', className, children, delay = 0.1, gap = 0.08, ...rest }) {
  const Tag = tags[as] || motion.div
  return (
    <Tag
      variants={stagger(delay, gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Item({ as = 'div', className, children, ...rest }) {
  const Tag = tags[as] || motion.div
  return (
    <Tag variants={fadeUp} className={className} {...rest}>
      {children}
    </Tag>
  )
}
