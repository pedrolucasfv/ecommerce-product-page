import styled, { css } from 'styled-components'

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 32rem;
    width: 100%;
    background-size: 80rem 14.8rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-bottom: 2rem;
  `}
`

export const Wrapper = styled.section`
  .slick-prev,
  .slick-next {
    display: block;
    background-color: white;
    border-radius: 50rem;
    cursor: pointer;
    position: absolute;
    top: 42%;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0;
    transform: translate(0, -50%);
  }
  .slick-prev {
    left: 8%;
    z-index: 10;
  }
  .slick-next {
    right: 8%;
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }
`
