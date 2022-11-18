import '../../../.jest/match-media-mock'
import { render } from '@testing-library/react'
import ProductPage from '.'
import infoMock from '../../components/InfoBox/mock'
import imageMock from '../../components/ImageBox/mock'
import menuMock from '../../components/Menu/mock'

const props = {
  imageBox: imageMock,
  infoBox: infoMock,
  menu: menuMock
}

describe('<ProductPage />', () => {
  it('should render the heading', () => {
    render(<ProductPage {...props} />)
  })
})
