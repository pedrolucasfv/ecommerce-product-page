import Button from 'components/Button'
import * as S from './styles'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import UnitSelector from 'components/UnitSelector'

export type InfoBoxProps = {
  title: string
  subtitle: string
  description: string
  price: string
  promotion?: string
  promotionalPrice?: string
}

const InfoBox = ({
  title,
  description,
  subtitle,
  price,
  promotion,
  promotionalPrice
}: InfoBoxProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
    </S.Info>

    <S.PriceBox>
      <S.ContentPrice>
        <S.Price>{promotionalPrice || price}</S.Price>
        <S.Promotion>{promotion}</S.Promotion>
      </S.ContentPrice>
      {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
    </S.PriceBox>

    <S.BuyBox>
      <UnitSelector />
      <Button fullWidth icon={<AddShoppingCart />}>
        Add to cart
      </Button>
    </S.BuyBox>
  </S.Wrapper>
)

export default InfoBox
