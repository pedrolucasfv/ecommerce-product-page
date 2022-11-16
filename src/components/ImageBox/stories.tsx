import { Story, Meta } from '@storybook/react'
import ImageBox, { ImageBoxProps } from '.'

export default {
  title: 'ImageBox',
  component: ImageBox,
  args: {
    image: [
      'https://source.unsplash.com/user/willianjusten/1042x580',
      'https://source.unsplash.com/user/willianjusten/1042x581',
      'https://source.unsplash.com/user/willianjusten/1042x582',
      'https://source.unsplash.com/user/willianjusten/1042x583'
    ]
  }
} as Meta

export const Default: Story<ImageBoxProps> = (args) => <ImageBox {...args} />
