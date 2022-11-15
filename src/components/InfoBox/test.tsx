import { render, screen } from '@testing-library/react'

import InfoBox from '.'

const args = {
  title: 'sneaker company',
  subtitle: 'Fall Limited Edition Sneakers',
  promotionalPrice: 'R$125.00',
  price: '$250.00',
  promotion: '50%',
  description:
    "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll whitstand everything the weather can offer"
}

describe('<InfoBox />', () => {
  it('should render the heading', () => {
    render(<InfoBox {...args} />)
    expect(screen.getByText(/sneaker company/i)).toBeInTheDocument()
  })
})
