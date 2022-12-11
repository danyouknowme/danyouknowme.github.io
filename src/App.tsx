import { ThemeProvider } from 'styled-components'
import { Navbar, Scene, Quote, Profile, Content } from './components'
import { lightTheme, darkTheme } from './styles/themes'
import {
  Article,
  ContentSection,
  GlobalStyle,
  MainSection,
} from './styles/global'
import { useThemeMode } from './hooks/useThemeMode'
import { ThemeContext } from './contexts/ThemeContext'
import { Fragment, useEffect, useState } from 'react'
import LoadingScreen from './screens/Loading/Loading'

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
            <Scene />
            <Article>
              <ContentSection>
                <Quote />
                <Profile isLoading={isLoading} />
                <Content isLoading={isLoading} />
              </ContentSection>
            </Article>
          </MainSection>
        </Fragment>
      </ThemeProvider>
    </ThemeContext>
  )
}
