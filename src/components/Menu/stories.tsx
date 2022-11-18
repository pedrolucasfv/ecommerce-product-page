import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    cart: {
      image: '/img/image-product-1.jpg',
      title: 'Fall Limited Edition Sneakers',
      price: 125,
      unit: 3
    }
  }
} as Meta

export const Default: Story = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
