import ImageBox, { ImageBoxProps } from 'components/ImageBox'
import InfoBox, { InfoBoxProps } from 'components/InfoBox'
import Menu from 'components/Menu'
import * as S from './styles'

export type ProductPageTemplateProps = {
  imageBox: ImageBoxProps
  infoBox: InfoBoxProps
}

const ProductPage = ({ imageBox, infoBox }: ProductPageTemplateProps) => (
  <S.Wrapper>
    <Menu />
    <S.Container>
      <S.ImageBox>
        <ImageBox {...imageBox} />
      </S.ImageBox>
      <S.InfoBox>
        <InfoBox {...infoBox} />
      </S.InfoBox>
    </S.Container>
  </S.Wrapper>
)

export default ProductPage
