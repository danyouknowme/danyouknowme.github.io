import {
  MenuListContainer,
  NavbarContainer,
  NavbarWrapper,
  NavbarTitle,
  ThemeButtonContainer,
} from './style'
import { FaGithub } from 'react-icons/fa'
import ThemeTogglerButton from '../ThemeTogglerButton'
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  ChakraProvider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

interface NavbarProps {
  theme: string
  themeToggler: () => void
}

export default function Navbar({ theme, themeToggler }: NavbarProps) {
  return (
    <ChakraProvider>
      <NavbarContainer isScroll={true}>
        <NavbarWrapper>
          <NavbarTitle>
            <Link to='/'>
              <span>dizzy</span>
            </Link>
            <MenuListContainer>
              <li>
                <Link to='/works'>
                  <span>Works</span>
                </Link>
              </li>
              <li>
                <Link to='/experiences'>
                  <span>Experiences</span>
                </Link>
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
            </MenuListContainer>
          </NavbarTitle>
          <ThemeButtonContainer>
            <ThemeTogglerButton theme={theme} themeToggler={themeToggler} />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <CustomMenuList theme={theme}>
                  <Link to='works'>
                    <CustomMenuItem text={'Works'} theme={theme} />
                  </Link>
                  <Link to='/experiences'>
                    <CustomMenuItem text={'Experiences'} theme={theme} />
                  </Link>
                  <a
                    href='https://github.com/danyouknowme'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <CustomMenuItem
                      icon={<FaGithub />}
                      text={'Github'}
                      theme={theme}
                    />
                  </a>
                </CustomMenuList>
              </Menu>
            </Box>
          </ThemeButtonContainer>
        </NavbarWrapper>
      </NavbarContainer>
    </ChakraProvider>
  )
}

function CustomMenuList({
  children,
  theme,
}: {
  children: JSX.Element | JSX.Element[]
  theme: string
}) {
  return (
    <MenuList
      style={{
        background: `${theme === 'dark' ? 'rgb(67, 67 ,67)' : '#ffffff'}`,
        color: `${theme === 'dark' ? 'white' : 'black'}`,
      }}
    >
      {children}
    </MenuList>
  )
}

function CustomMenuItem({
  text,
  theme,
  icon,
}: {
  text: string
  theme: string
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined
}) {
  return (
    <MenuItem
      icon={icon}
      style={{
        background: `${theme === 'dark' ? 'rgb(67, 67 ,67)' : '#ffffff'}`,
      }}
    >
      {text}
    </MenuItem>
  )
}
