import { useEffect, useState } from 'react'

export function useThemeMode() {
  const [theme, setTheme] = useState('light')

  function setMode(mode: string) {
    setTheme(mode)
  }

  function themeToggler() {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(function () {
    setTheme(theme)
  }, [theme])

  return { theme, themeToggler }
}
