import Button from 'components/Button'
import * as S from './styles'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export type InfoBoxProps = {
  title: string
  subtitle: string
  description: string
}

const InfoBox = ({ title, description, subtitle }: InfoBoxProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
    </S.Info>

    <S.Price>R$125</S.Price>

    <S.BuyBox>
      <Button icon={<AddShoppingCart />}>Add to cart</Button>
    </S.BuyBox>
  </S.Wrapper>
)

export default InfoBox
