import ImageBox, { ImageBoxProps } from 'components/ImageBox'
import InfoBox, { InfoBoxProps } from 'components/InfoBox'
import ImageSlider from 'components/ImageSlider'
import Menu, { MenuProps } from 'components/Menu'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type ProductPageTemplateProps = {
  imageBox: ImageBoxProps
  infoBox: InfoBoxProps
  menu: MenuProps
}

const ProductPage = ({ imageBox, infoBox, menu }: ProductPageTemplateProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="medium">
      <Menu cart={menu.cart} photo={menu.photo} username={menu.username} />
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
      <Menu cart={menu.cart} />
      <ImageSlider {...imageBox} />
      <InfoBox {...infoBox} />
    </MediaMatch>
  </S.Wrapper>
)

export default ProductPage
