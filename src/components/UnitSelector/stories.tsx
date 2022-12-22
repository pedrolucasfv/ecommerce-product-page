import { Story, Meta } from '@storybook/react'
import UnitSelector, { UnitSelectorProps } from '.'

export default {
  title: 'UnitSelector',
  component: UnitSelector,
  args: {
    unitFunc: (unit: number) => {
      console.log(unit)
    }
  }
} as Meta

export const Default: Story<UnitSelectorProps> = (args) => (
  <UnitSelector {...args} />
)
