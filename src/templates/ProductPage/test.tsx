import '../../../.jest/match-media-mock'
import { render } from '@testing-library/react'
import ProductPage from '.'
import infoMock from '../../components/InfoBox/mock'
import imageMock from '../../components/ImageBox/mock'

const props = {
  imageBox: imageMock,
  infoBox: infoMock
}

describe('<ProductPage />', () => {
  it('should render the heading', () => {
    render(<ProductPage {...props} />)
  })
})
