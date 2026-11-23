import { useCallback } from 'react'

export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  const onPointerMove = useCallback((e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
  }, [])
  return (
    <Tag className={`card ${className}`} onPointerMove={onPointerMove} {...rest}>
      {children}
    </Tag>
  )
}
