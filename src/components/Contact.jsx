import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, ArrowUpRight, Send, Check, CircleAlert, LoaderCircle } from 'lucide-react'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6'
import { profile, emailjsConfig } from '../data/profile'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'
import { Reveal, Stagger, Item } from './ui/motion'
import './contact.css'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, cta: 'Send a message', Icon: Mail },
  { label: 'WhatsApp', value: profile.phoneDisplay, href: profile.whatsapp, cta: 'Message me', Icon: FaWhatsapp },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.socials.linkedin, cta: 'Connect', Icon: FaLinkedinIn },
]

export default function Contact() {
  const form = useRef(null)
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form.current, { publicKey: emailjsConfig.publicKey })
      setStatus('sent')
      form.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact__grid">
        <div>
          <SectionHead
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build <em>something</em> together.
              </>
            }
            lede="Have a role, a project or just a question about AI agents? My inbox is open and I usually reply within a day."
          />
          <Stagger className="contact__channels" as="ul" delay={0.2}>
            {channels.map(({ label, value, href, cta, Icon }) => (
              <Item key={label} as="li">
                <Card as="a" href={href} target="_blank" rel="noreferrer" className="contact__channel card--lift">
                  <span className="contact__channel-icon">
                    <Icon size={18} />
                  </span>
                  <span className="contact__channel-text">
                    <span className="contact__channel-label mono">{label}</span>
                    <span className="contact__channel-value">{value}</span>
                  </span>
                  <span className="contact__channel-cta">
                    {cta} <ArrowUpRight size={15} />
                  </span>
                </Card>
              </Item>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.15}>
          <Card as="form" ref={form} onSubmit={onSubmit} className="contact__form card__pad">
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your full name" required autoComplete="name" />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell me about your project or role" required />
            </div>
            <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  Sending <LoaderCircle size={16} className="spin" />
                </>
              ) : (
                <>
                  Send message <Send size={16} className="btn__icon" />
                </>
              )}
            </button>
            <AnimatePresence>
              {status === 'sent' && (
                <motion.p className="contact__note contact__note--ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <Check size={15} /> Thanks, your message is on its way.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p className="contact__note contact__note--err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <CircleAlert size={15} /> Something went wrong. Email me directly at {profile.email}.
                </motion.p>
              )}
            </AnimatePresence>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
