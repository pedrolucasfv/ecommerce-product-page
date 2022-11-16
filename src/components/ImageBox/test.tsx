import { render } from '@testing-library/react'

import ImageBox from '.'

const args = {
  image: [
    'https://source.unsplash.com/user/willianjusten/1042x580',
    'https://source.unsplash.com/user/willianjusten/1042x581',
    'https://source.unsplash.com/user/willianjusten/1042x582',
    'https://source.unsplash.com/user/willianjusten/1042x583'
  ]
}

describe('<ImageBox />', () => {
  it('should render the heading', () => {
    render(<ImageBox {...args} />)
  })
})
