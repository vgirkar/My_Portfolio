import { useCallback, useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#09090b' : '#fafafa')
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return [theme, toggle]
}
