import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'

import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'

const settings: SliderSettings = {
  dots: false,
  arrows: true,
  vertical: false,
  verticalSwiping: false,
  infinite: false,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

export type ImageSliderProps = {
  images: string[]
}
const ImageSlider = ({ images }: ImageSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {images.map((image) => (
        <S.Image key={image} src={image} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ImageSlider
