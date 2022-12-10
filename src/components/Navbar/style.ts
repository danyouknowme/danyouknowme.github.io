import styled, { DefaultTheme } from 'styled-components'

export const NavbarContainer = styled.nav<{ theme: DefaultTheme, isScroll: boolean }>`
  position: fixed;
  background: ${({ theme }) => theme.navbarBackground};
  z-index: 2;
  backdrop-filter: blur(${props => props.isScroll ? '10px' : '0px'});
  width: 100%;
`

export const NavbarWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 767px) {
    padding: 16px;
  }
`

export const NavbarTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
`

export const MenuListContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 300;

  li {
    margin: 0 12px;

    a {
      display: flex;
      align-items: center;

      span {
        margin-left: 4px;
        display: inline-block;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: ${({ theme }) => theme.text};
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
`

export const ThemeButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`
