import { Fragment } from 'react'
import { Content, Profile, Quote, Scene } from '../../components'
import { Article, ContentSection } from '../../styles/global'

export default function Home({ isLoading }: { isLoading: boolean }) {
  return (
    <Fragment>
      <Scene />
      <Article>
        <ContentSection>
          <Quote />
          <Profile isLoading={isLoading} />
          <Content isLoading={isLoading} />
        </ContentSection>
      </Article>
    </Fragment>
  )
}
