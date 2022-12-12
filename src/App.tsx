import { ThemeProvider } from 'styled-components'
import { Navbar } from './components'
import { lightTheme, darkTheme } from './styles/themes'
import { GlobalStyle, MainSection } from './styles/global'
import { useThemeMode } from './hooks/useThemeMode'
import { ThemeContext } from './contexts/ThemeContext'
import { Fragment, useEffect, useState } from 'react'
import LoadingScreen from './screens/Loading/Loading'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'

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
              <Route
                path='/works'
                element={
                  <div style={{ paddingTop: '100px' }}>In progress...</div>
                }
              />
              <Route
                path='/experiences'
                element={
                  <div style={{ paddingTop: '100px' }}>In progress...</div>
                }
              />
            </Routes>
          </MainSection>
        </Fragment>
      </ThemeProvider>
    </ThemeContext>
  )
}
