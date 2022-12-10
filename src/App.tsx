import { ThemeProvider } from 'styled-components'
import { Navbar, Scene, Quote } from './components'
import { lightTheme, darkTheme } from './styles/themes'
import {
  Article,
  ContentSection,
  GlobalStyle,
  MainSection,
} from './styles/global'
import { useThemeMode } from './hooks/useThemeMode'
import { ThemeContext } from './contexts/ThemeContext'

export default function App() {
  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navbar themeToggler={themeToggler} />
        <MainSection>
          <Scene />
          <Article>
            <ContentSection>
              <Quote />
            </ContentSection>
          </Article>
        </MainSection>
      </ThemeProvider>
    </ThemeContext>
  )
}
