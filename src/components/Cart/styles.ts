import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: white;
`

export const Content = styled.div`
  border-bottom: 0.2rem solid lightgray;
`
export const Title = styled.h2`
  padding: 1.2rem 0 2.2rem 1.7rem;
`

export const BoxProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.2rem 1.7rem;
`

export const Product = styled.div`
  display: flex;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: space-between;
`

type ImageProps = {
  src?: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src});
    height: 7rem;
    width: 7rem;
    background-size: 80rem 14.8rem;
    border-radius: 1rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-right: 2rem;
  `}
`

export const InfoProduct = styled.div`
  height: 7rem;
  flex-grow: 1;
`

export const TitleProduct = styled.div`
  font-size: 2.2rem;
  color: gray;
  padding-top: 0.3rem;
  margin-bottom: 0.5rem;
`

export const Price = styled.div`
  font-size: 2.2rem;
  color: gray;
  span {
    margin-left: 1rem;
    color: black;
    font-weight: 650;
  }
`

export const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  margin-left: 3rem;
  cursor: pointer;
  color: lightgray;
  :hover {
    color: hsl(26, 100%, 62%);
  }
`

export const EmptyMessage = styled.h2`
  font-size: 2.2rem;
  color: gray;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
`
