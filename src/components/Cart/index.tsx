import Button from 'components/Button'
import * as S from './styles'
import { Trash as TrashIcon } from '@styled-icons/heroicons-solid/Trash'
export type CartProps = {
  image: string
  title: string
  price: number
  unit: number
}

const Cart = ({ image, title, price, unit }: CartProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>Cart</S.Title>
    </S.Content>
    <S.BoxProduct>
      <S.Product>
        <S.Image src={image}></S.Image>
        <S.InfoProduct>
          <S.TitleProduct>{title}</S.TitleProduct>
          <S.Price>
            ${price} x {unit} <span>${price * unit}</span>
          </S.Price>
        </S.InfoProduct>
        <S.Icon>
          <TrashIcon />
        </S.Icon>
      </S.Product>
      <Button>Checkout</Button>
    </S.BoxProduct>
  </S.Wrapper>
)

export default Cart
