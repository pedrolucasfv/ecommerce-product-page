import styled from 'styled-components'
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
  padding-left: 21rem;
    transform: translateX(-50%);
 `}
`

export const IconWrapper = styled.div`
  color: white;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
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
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: hsl(26, 100%, 55%);
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`
