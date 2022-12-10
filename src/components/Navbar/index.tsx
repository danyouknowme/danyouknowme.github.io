import {
  MenuList,
  NavbarContainer,
  NavbarWrapper,
  NavbarTitle,
  ThemeButtonContainer,
} from './style'
import { FaGithub } from 'react-icons/fa'
import ThemeTogglerButton from '../ThemeTogglerButton'

interface NavbarProps {
  theme: string
  themeToggler: () => void
}

export default function Navbar({ theme, themeToggler }: NavbarProps) {
  return (
    <NavbarContainer isScroll={true}>
      <NavbarWrapper>
        <NavbarTitle>
          <span>dizzy</span>
        </NavbarTitle>
        <MenuList>
          <li>
            <a href='#home'>
              <span>Works</span>
            </a>
          </li>
          <li>
            <a href='#home'>
              <span>Experiences</span>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/danyouknowme'
              target={'_blank'}
              rel='noreferrer'
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </li>
        </MenuList>
        <ThemeButtonContainer>
          <ThemeTogglerButton theme={theme} themeToggler={themeToggler} />
        </ThemeButtonContainer>
      </NavbarWrapper>
    </NavbarContainer>
  )
}
