import { ThemeProvider } from 'styled-components'
import { Navbar } from './components'
import { lightTheme, darkTheme } from './styles/themes'
import { GlobalStyle, MainSection } from './styles/global'
import { useThemeMode } from './hooks/useThemeMode'
import { ThemeContext } from './contexts/ThemeContext'
import { Fragment, useEffect, useState } from 'react'
import LoadingScreen from './screens/Loading'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Work from './screens/Work'
import Experience from './screens/Experience'

export default function App() {
  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 5000)
  })

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <LoadingScreen isLoading={isLoading} />
        <Fragment>
          <Navbar theme={theme} themeToggler={themeToggler} />
          <MainSection>
            <Routes>
              <Route path='/' element={<Home isLoading={isLoading} />} />
              <Route path='/works' element={<Work theme={theme} />} />
              <Route path='/experiences' element={<Experience />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </MainSection>
        </Fragment>
      </ThemeProvider>
    </ThemeContext>
  )
}
