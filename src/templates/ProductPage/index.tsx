import ImageBox, { ImageBoxProps } from 'components/ImageBox'
import InfoBox, { InfoBoxProps } from 'components/InfoBox'
import ImageSlider from 'components/ImageSlider'
import Menu from 'components/Menu'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

export type ProductPageTemplateProps = {
  imageBox: ImageBoxProps
  infoBox: InfoBoxProps
}

const ProductPage = ({ imageBox, infoBox }: ProductPageTemplateProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="medium">
      <Menu />
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
      <Menu />
      <ImageSlider {...imageBox} />
      <InfoBox {...infoBox} />
    </MediaMatch>
  </S.Wrapper>
)

export default ProductPage
