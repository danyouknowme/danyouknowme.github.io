import { Fragment } from 'react'
import { Navbar, Scene, Quote } from './components'
import {
  Article,
  ContentSection,
  GlobalStyle,
  MainSection,
} from './globalStyles'

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <MainSection>
        <Scene />
        <Article>
          <ContentSection>
            <Quote />
          </ContentSection>
        </Article>
      </MainSection>
    </Fragment>
  )
}
