import { Story, Meta } from '@storybook/react'
import Cart, { CartProps } from '.'

export default {
  title: 'Cart',
  component: Cart,
  args: {
    image: '/img/image-product-1.jpg',
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    unit: 3
  }
} as Meta

export const Default: Story<CartProps> = (args) => <Cart {...args} />
