import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  width: 70%;
  height: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.h3`
  color: hsl(26, 100%, 62%);
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`
export const Subtitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.5rem;
`
export const Description = styled.text`
  margin-bottom: 1.5rem;
  color: gray;
  font-size: 1.4rem;
  line-height: 1.7;
`
const PriceModifiers = {
  default: () => css`
    font-size: 3rem;
    font-weight: bold;
  `,
  promotional: () => css`
    text-decoration: line-through;
    font-size: 1.5rem;
    color: hsl(220, 14%, 75%);
  `
}

export const Price = styled.div<PriceProps>`
  ${({ isPromotional }) => css`
    ${isPromotional && PriceModifiers.promotional()}
    ${!isPromotional && PriceModifiers.default()}
  `}
`
export const BuyBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
`
type PriceProps = {
  isPromotional?: boolean
}

export const PriceBox = styled.div`
  margin-bottom: 2rem;
`

export const Promotion = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  left: 35%;
  top: 10%;
  background-color: hsl(25, 100%, 94%);
  color: hsl(26, 100%, 62%);
  padding: 0.3rem 1rem;
  margin-left: 2rem;
  border-radius: 0.5rem;
`

export const ContentPrice = styled.div`
  display: flex;
  align-items: center;
`
