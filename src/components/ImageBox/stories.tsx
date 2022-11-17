import { Story, Meta } from '@storybook/react'
import ImageBox, { ImageBoxProps } from '.'
import images from './mock'

export default {
  title: 'ImageBox',
  component: ImageBox,
  args: {
    ...images
  }
} as Meta

export const Default: Story<ImageBoxProps> = (args) => <ImageBox {...args} />
