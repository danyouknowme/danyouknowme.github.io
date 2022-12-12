import { Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ContentContainer, ContentWrapper, ResumeContent } from './style'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

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
      <ContentWrapper>
        <h3>About</h3>
        <p>
          Hi, You can call me Dan. I am currently studying Software and
          Knowledge Engineering at Kasetsart University. I was fascinated by
          programming which brought me to challenges in this field. I have
          experience in frontend web development. I am interested to be
          considered for a software engineering intern. If you are impressed in
          me, please feel free to contact me <a href='#contact'>@Contact</a>
        </p>
        <ResumeContent>
          <a href='https://resume.danyouknow.me/'>
            <Button rightIcon={<ChevronRightIcon />}>Resume</Button>
          </a>
        </ResumeContent>
      </ContentWrapper>
      <ContentWrapper>
        <h3>Learning</h3>
        <p>
          Nowadays, I'm more interested in backend development and rendering of
          3D models on websites. And I decided to learn go programming language
          and three.js javascript library.
        </p>
        <div className='learning__list'>
          <div>
            <img
              src='https://seeklogo.com/images/G/go-logo-046185B647-seeklogo.com.png'
              alt='go'
            />
            <span>Go</span>
          </div>
          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png'
              alt='threejs'
            />
            <span>Three.js</span>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper id='contact'>
        <h3>Contacts</h3>
        <div className='contact__list'>
          <a
            href='mailto:thanathip.suw@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <Button leftIcon={<MdOutlineEmail />}>
              thanathip.suw@gmail.com
            </Button>
          </a>
          <a
            href='https://www.instagram.com/danthanathip/'
            target='_blank'
            rel='noreferrer'
          >
            <Button leftIcon={<IoLogoInstagram />}>danthanathip</Button>
          </a>
        </div>
      </ContentWrapper>
      <span className='footer__text'>
        © 2022 Thanathip Suwannkhot. All Rights Reserved.
      </span>
    </ContentContainer>
  )
}
