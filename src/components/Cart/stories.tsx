import { Story, Meta } from '@storybook/react'
import Cart, { CartProps } from '.'
import item from './mock'
export default {
  title: 'Cart',
  component: Cart,
  args: {
    ...item
  }
} as Meta

export const Default: Story<CartProps> = (args) => <Cart {...args} />
