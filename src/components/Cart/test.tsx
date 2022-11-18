import { render } from '@testing-library/react'

import Cart from '.'

const args = {
  image: '/img/image-product-1.jpg',
  title: 'Fall Limited Edition Sneakers',
  price: 125,
  unit: 3
}
describe('<Cart />', () => {
  it('should render the heading', () => {
    render(<Cart {...args} />)
  })
})
