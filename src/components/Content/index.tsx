import { Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AboutContent, ContentContainer, ResumeContent } from './style'

const ContentContainerAnimation = {
  hidden: { translateY: '50px', opacity: 0 },
  show: { translateY: 0, opacity: 1, transition: { duration: 1 } },
}

export default function Content({ isLoading }: { isLoading: boolean }) {
  return (
    <ContentContainer
      animate={isLoading ? 'show' : 'hidden'}
      variants={ContentContainerAnimation}
    >
      <AboutContent>
        <h3>About</h3>
        <p>
          I am currently studying Software and Knowledge Engineering at
          Kasetsart University. I have experience in frontend web development
          and am currently learning in{' '}
          <a href='https://go.dev/' target='_blank' rel='noreferrer'>
            golang
          </a>{' '}
          and{' '}
          <a href='https://threejs.org/' target='_blank' rel='noreferrer'>
            threejs
          </a>
          . I am interested to be considered for a software engineering intern.
        </p>
      </AboutContent>
      <ResumeContent>
        <a href='https://resume.danyouknow.me/'>
          <Button rightIcon={<ChevronRightIcon />}>Resume</Button>
        </a>
      </ResumeContent>
    </ContentContainer>
  )
}
