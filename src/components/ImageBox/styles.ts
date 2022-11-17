import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

type MainImageProps = {
  src: string
}
export const MainImage = styled.div<MainImageProps>`
  ${({ src }) => css`
    height: 53rem;
    width: 58.5rem;
    background-size: 80rem 14.8rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-bottom: 2rem;
    border-radius: 2rem;
  `}
`
type ImageProps = {
  src: string
  select: boolean
}

export const Image = styled.div<ImageProps>`
  ${({ src, select }) => css`
    height: 12rem;
    width: 12rem;
    background-size: 80rem 14.8rem;

    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-right: 3.5rem;
    border-radius: 1rem;
    cursor: pointer;
    z-index: 10;
    ${select &&
    `border: 3px solid hsl(26, 100%, 55%); box-shadow: inset 0 0 0 100px rgba(255,255, 255, 0.7)`}
  `}
`
export const ImageList = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Film = styled.div`
  background: rgba(0, 0, 0, 1);
  z-index: 50;
`
