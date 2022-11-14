import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
  background-color: white;
  height: 6rem;
  ${media.lessThan('medium')`
     padding-right: 1.2rem;
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
  > div {
    margin-left: 1.2rem;
  }
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
  margin-left: 0.8rem;
  `}
`
export const PhotoTest = styled.div`
  background-color: red;
`

export const MenuLink = styled.a`
  position: relative;
  color: white;
  font-size: 1.4rem;
  margin: 0.3rem 0.8rem 0;
  text-decoration: none;
  text-align: center;
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
    }
  `}
`

export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 2rem;

  > span {
    display: block;
    margin: 1.2rem 0;
    font-size: 1.2rem;
  }
`

export const CreateAccount = styled.div`
  text-decoration: none;
  cursor: pointer;
  color: hsl(26, 100%, 55%);
  border-bottom: 0.2rem solid hsl(26, 100%, 55%);
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
