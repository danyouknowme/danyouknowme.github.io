import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeMode } from '../hooks/useThemeMode'
import { lightTheme, darkTheme } from '../styles/themes'

interface ThemeContextProps {
  children: any
}

export function ThemeContext({ children }: ThemeContextProps) {
  const { theme } = useThemeMode()

  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}
