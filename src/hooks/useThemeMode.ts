import { useEffect, useState } from 'react'

export function useThemeMode() {
  const [theme, setTheme] = useState('dark')

  function setMode(mode: string) {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  function themeToggler() {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(function () {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return { theme, themeToggler }
}
