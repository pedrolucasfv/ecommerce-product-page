import { Story, Meta } from '@storybook/react'
import InfoBox, { InfoBoxProps } from '.'
import item from './mock'

export default {
  title: 'InfoBox',
  component: InfoBox,
  args: { ...item }
} as Meta

export const Default: Story<InfoBoxProps> = (args) => <InfoBox {...args} />
