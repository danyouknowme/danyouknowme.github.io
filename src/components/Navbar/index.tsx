import { MenuList, NavbarContainer, NavbarWrapper, NavbarTitle } from './style'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <NavbarContainer isScroll={true}>
      <NavbarWrapper>
        <NavbarTitle>
          <span>danyouknowme</span>
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
      </NavbarWrapper>
    </NavbarContainer>
  )
}
