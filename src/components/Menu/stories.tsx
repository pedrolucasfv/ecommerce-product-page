import { Story, Meta } from '@storybook/react'
import Menu from '.'
import item from './mock'
export default {
  title: 'Menu',
  component: Menu,
  args: {
    ...item
  }
} as Meta

export const Default: Story = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
