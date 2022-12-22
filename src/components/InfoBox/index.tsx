import Button from 'components/Button'
import * as S from './styles'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import UnitSelector from 'components/UnitSelector'
import { useState } from 'react'

export type InfoBoxProps = {
  title: string
  subtitle: string
  description: string
  price: string
  promotion?: string
  promotionalPrice?: string
  addCart: (unit: number) => void
}

const InfoBox = ({
  title,
  description,
  subtitle,
  price,
  promotion,
  promotionalPrice,
  addCart
}: InfoBoxProps) => {
  const [unit, setUnit] = useState(0)

  const unitFunc = (unit: number) => {
    setUnit(unit)
  }

  return (
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
        <S.UnitSelector>
          <UnitSelector unitFunc={unitFunc} />
        </S.UnitSelector>
        <S.Button onClick={() => addCart(unit)}>
          <Button fullWidth icon={<AddShoppingCart />}>
            Add to cart
          </Button>
        </S.Button>
      </S.BuyBox>
    </S.Wrapper>
  )
}
export default InfoBox
