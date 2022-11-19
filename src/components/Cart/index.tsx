import Button from 'components/Button'
import * as S from './styles'
import { Trash as TrashIcon } from '@styled-icons/heroicons-solid/Trash'
import { useState } from 'react'
export type CartProps = {
  title?: string
  image?: string
  price?: number
  unit?: number
}

const Cart = ({ image, title, price, unit }: CartProps) => {
  const [state, setIsRemoveItem] = useState(title)
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Cart</S.Title>
      </S.Content>
      {state ? (
        <S.BoxProduct>
          <S.Product>
            <S.Image src={image}></S.Image>
            <S.InfoProduct>
              <S.TitleProduct>{title}</S.TitleProduct>
              {!!price && !!unit && (
                <S.Price>
                  ${price} x {unit} <span>${price * unit}</span>
                </S.Price>
              )}
            </S.InfoProduct>
            <S.Icon onClick={() => setIsRemoveItem(undefined)}>
              <TrashIcon />
            </S.Icon>
          </S.Product>
          <Button>Checkout</Button>
        </S.BoxProduct>
      ) : (
        <S.EmptyMessage> You cart is empty.</S.EmptyMessage>
      )}
    </S.Wrapper>
  )
}

export default Cart
