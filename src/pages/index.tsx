import ProductPage, { ProductPageTemplateProps } from '../templates/ProductPage'
import imagesMock from 'components/ImageBox/mock'
import infoMock from 'components/InfoBox/mock'
import menuMock from 'components/Menu/mock'

export default function Home(props: ProductPageTemplateProps) {
  return <ProductPage {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      imageBox: imagesMock,
      infoBox: infoMock,
      menu: menuMock
    }
  }
}
