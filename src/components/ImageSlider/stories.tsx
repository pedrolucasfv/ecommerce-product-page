import { Story, Meta } from '@storybook/react'
import ImageSlider, { ImageSliderProps } from '.'

export default {
  title: 'ImageSlider',
  component: ImageSlider,
  args: {
    images: [
      '/img/image-product-1.jpg',
      '/img/image-product-2.jpg',
      '/img/image-product-3.jpg',
      '/img/image-product-4.jpg'
    ]
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta

export const Default: Story<ImageSliderProps> = (args) => (
  <ImageSlider {...args} />
)
