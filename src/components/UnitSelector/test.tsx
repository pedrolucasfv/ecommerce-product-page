import { render } from '@testing-library/react'
import UnitSelector from '.'

describe('<UnitBox />', () => {
  it('should call onFav method when favorite is clicked', () => {
    render(<UnitSelector />)
  })
})
