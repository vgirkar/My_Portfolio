import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { profile, navLinks } from '../data/profile'
import './footer.css'

const socials = [
  { href: profile.socials.github, label: 'GitHub', Icon: FaGithub },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: profile.socials.x, label: 'X', Icon: FaXTwitter },
  { href: profile.socials.instagram, label: 'Instagram', Icon: FaInstagram },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <span className="nav__mark">V</span>
              {profile.name}
            </a>
            <p className="muted">{profile.role}. Building AI agents and the systems that run them.</p>
          </div>

          <ul className="footer__links">
            {[...navLinks, { id: 'education', label: 'Education' }].map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>

          <ul className="footer__socials">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <small>
            &copy; {year} {profile.fullName}. Designed and built with React, Vite and Motion.
          </small>
          <a href="#top" className="footer__up" aria-label="Back to top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
