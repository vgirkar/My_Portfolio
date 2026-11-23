import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import './nav.css'

const ids = navLinks.map((l) => l.id)

export default function Nav() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  return (
    <>
    <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <nav className="nav__inner" aria-label="Primary">
        <a href="#top" className="nav__logo" aria-label="Back to top" onClick={() => setOpen(false)}>
          <span className="nav__mark">V</span>
          <span className="nav__name">Vinit Girkar</span>
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a href={`#${link.id}`} className={isActive ? 'is-active' : ''}>
                  {isActive && <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span>{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav__actions">
          <button className="nav__icon" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="nav__icon-inner"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="btn btn--primary btn--sm nav__cta" href={profile.cv} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} className="btn__icon" />
          </a>
          <button className="nav__icon nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li key={link.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.05 }}>
                  <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                    <span className="mono">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a className="btn btn--primary" href={profile.cv} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              View resume <ArrowUpRight size={16} className="btn__icon" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  )
}
