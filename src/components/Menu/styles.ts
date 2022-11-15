import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MenuProps } from '.'

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
  background-color: white;
  height: 10rem;
  border-bottom: 0.3rem solid lightgray;
  ${media.lessThan('medium')`
     padding-right: 1.2rem;
     height: 6rem;
 `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
  position: absolute ;
  margin-left: 10.5rem;
    transform: translateX(-50%);
 `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  color: black;
`

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  //padding: 3rem;
  > div {
    margin: 0 2.2rem;
  }
  ${media.greaterThan('medium')`
    margin: 2rem;
    > button { 
    padding: 1rem 2rem;
  }
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
  margin-left: 2rem;
  `}
`

export const MenuLink = styled.a`
  position: relative;
  color: gray;
  font-size: 1.4rem;
  margin: 0.3rem 2.8rem 0;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
`
type MenuToggleProps = {
  isOpen: boolean
}
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpen }) => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 60%;
    left: 0;
    top: 0;

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

type PhotoProps = Pick<MenuProps, 'photo'>

export const Photo = styled.div<PhotoProps>`
  ${({ photo }) => css`
    background-color: ${photo};
  `}
`

export const Sombra = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`
