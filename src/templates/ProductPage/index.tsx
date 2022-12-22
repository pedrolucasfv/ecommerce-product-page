import ImageBox, { ImageBoxProps } from 'components/ImageBox'
import InfoBox, { InfoBoxProps } from 'components/InfoBox'
import ImageSlider from 'components/ImageSlider'
import Menu, { MenuProps } from 'components/Menu'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import { CartProps } from 'components/Cart'

export type ProductPageTemplateProps = {
  imageBox: ImageBoxProps
  infoBox: InfoBoxProps
  menu: MenuProps
}

const ProductPage = ({ imageBox, infoBox, menu }: ProductPageTemplateProps) => {
  const [cart, setCart] = useState<CartProps>()

  const addCart = (unit: number) => {
    menu.cart = {
      title: menu.cart?.title,
      image: menu.cart?.image,
      price: menu.cart?.price,
      unit: unit,
      removeCart: removeCart
    }
    setCart(menu.cart)
  }
  const removeCart = () => {
    setCart(undefined)
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <Menu
          cart={cart}
          photo={menu.photo}
          username={menu.username}
          removeCart={removeCart}
        />
        <S.Container>
          <S.ImageBox>
            <ImageBox {...imageBox} />
          </S.ImageBox>
          <S.InfoBox>
            <InfoBox {...infoBox} addCart={addCart} />
          </S.InfoBox>
        </S.Container>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <Menu
          cart={cart}
          photo={menu.photo}
          username={menu.username}
          removeCart={removeCart}
        />
        <ImageSlider {...imageBox} />
        <InfoBox {...infoBox} addCart={addCart} />
      </MediaMatch>
    </S.Wrapper>
  )
}
export default ProductPage
