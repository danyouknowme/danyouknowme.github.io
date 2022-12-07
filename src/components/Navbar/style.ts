import styled from 'styled-components'

export const NavbarContainer = styled.nav<{ isScroll: boolean }>`
  position: fixed;
  background: rgba(32, 32, 35, 0.5);
  z-index: 2;
  backdrop-filter: blur(${props => props.isScroll ? '10px' : '0px'});
  color: white;
  width: 100%;
`

export const NavbarWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`

export const NavbarTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;

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
          background-color: #f5f5f5;
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
  }
`