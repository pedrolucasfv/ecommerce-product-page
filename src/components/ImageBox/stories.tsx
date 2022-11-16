import { Story, Meta } from '@storybook/react'
import ImageBox, { ImageBoxProps } from '.'

export default {
  title: 'ImageBox',
  component: ImageBox,
  args: {
    image: [
      '/img/image-product-1.jpg',
      '/img/image-product-2.jpg',
      '/img/image-product-3.jpg',
      '/img/image-product-4.jpg'
    ]
  }
} as Meta

export const Default: Story<ImageBoxProps> = (args) => <ImageBox {...args} />
