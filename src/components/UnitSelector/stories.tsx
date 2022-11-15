import { Story, Meta } from '@storybook/react'
import UnitSelector from '.'

export default {
  title: 'UnitSelector',
  component: UnitSelector
} as Meta

export const Default: Story = (args) => <UnitSelector {...args} />
