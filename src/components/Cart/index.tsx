import Button from 'components/Button'
import * as S from './styles'
import { Trash as TrashIcon } from '@styled-icons/heroicons-solid/Trash'
export type CartProps = {
  title?: string
  image?: string
  price?: number
  unit?: number
  removeCart: () => void
}

const Cart = ({ image, title, price, unit, removeCart }: CartProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Cart</S.Title>
      </S.Content>
      {title ? (
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
            <S.Icon onClick={() => removeCart()}>
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
