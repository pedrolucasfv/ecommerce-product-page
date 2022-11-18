import '../../../.jest/match-media-mock'

import { render } from '@testing-library/react'
import ImageSlider from '.'

const args = {
  images: [
    '/img/image-product-1.jpg',
    '/img/image-product-2.jpg',
    '/img/image-product-3.jpg',
    '/img/image-product-4.jpg'
  ]
}

describe('<ImageSlider />', () => {
  it('should render the heading', () => {
    render(<ImageSlider {...args} />)
  })
})
