import { render } from '@testing-library/react'
import images from './mock'
import ImageBox from '.'

const args = images

describe('<ImageBox />', () => {
  it('should render the heading', () => {
    render(<ImageBox {...args} />)
  })
})
