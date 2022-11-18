import ImageBox, { ImageBoxProps } from 'components/ImageBox'
import InfoBox, { InfoBoxProps } from 'components/InfoBox'
import ImageSlider from 'components/ImageSlider'
import Menu from 'components/Menu'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import { CartProps } from 'components/Cart'

export type ProductPageTemplateProps = {
  imageBox: ImageBoxProps
  infoBox: InfoBoxProps
  cart: CartProps
}

const ProductPage = ({ imageBox, infoBox, cart }: ProductPageTemplateProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="medium">
      <Menu cart={cart} />
      <S.Container>
        <S.ImageBox>
          <ImageBox {...imageBox} />
        </S.ImageBox>
        <S.InfoBox>
          <InfoBox {...infoBox} />
        </S.InfoBox>
      </S.Container>
    </MediaMatch>

    <MediaMatch lessThan="medium">
      <Menu cart={cart} />
      <ImageSlider {...imageBox} />
      <InfoBox {...infoBox} />
    </MediaMatch>
  </S.Wrapper>
)

export default ProductPage
