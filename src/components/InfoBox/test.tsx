import { render } from '@testing-library/react'

import InfoBox from '.'

const args = {
  title: 'sneaker company',
  subtitle: 'fall limited edition sneakers',
  description:
    'these low-profile sneakers are your perfect casual wear companion.'
}

describe('<InfoBox />', () => {
  it('should render the heading', () => {
    render(<InfoBox {...args} />)
  })
})
