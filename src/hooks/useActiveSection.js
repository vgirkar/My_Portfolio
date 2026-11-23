import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    const onTop = () => {
      if (window.scrollY < 200) setActive('')
    }
    window.addEventListener('scroll', onTop, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onTop)
    }
  }, [ids])

  return active
}
