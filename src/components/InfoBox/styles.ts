import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  width: 100%;
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
  font-size: 2rem;
  ${media.lessThan('medium')`

     font-size: 1.2rem;
 `}
`
export const Subtitle = styled.h1`
  margin-bottom: 3rem;
  font-size: 4.5rem;
  ${media.lessThan('medium')`
     padding-right: 1rem;
     font-size: 2.5rem;
 `}
`
export const Description = styled.text`
  margin-bottom: 3rem;
  color: gray;
  font-size: 2rem;
  line-height: 1.7;
  ${media.lessThan('medium')`
     font-size: 1.4rem;
     font-weight: 500;
 `}
`
const PriceModifiers = {
  default: () => css`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  `,
  promotional: () => css`
    text-decoration: line-through;
    font-size: 2rem;
    color: hsl(220, 14%, 75%);
    margin-bottom: 1rem;
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

  ${media.lessThan('medium')`
    flex-direction: column;
 `}
`
type PriceProps = {
  isPromotional?: boolean
}

export const PriceBox = styled.div`
  margin-bottom: 4rem;
  ${media.lessThan('medium')`
    display: flex;    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
 `}
`

export const Promotion = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background-color: hsl(25, 100%, 94%);
  color: hsl(26, 100%, 62%);
  padding: 0.3rem 1rem;
  margin-left: 2rem;
  border-radius: 0.5rem;
  margin-top: 0.8rem;
  ${media.lessThan('medium')`
  margin-left: 1rem;
 `}
`

export const ContentPrice = styled.div`
  display: flex;
  align-items: flex-start;
`
