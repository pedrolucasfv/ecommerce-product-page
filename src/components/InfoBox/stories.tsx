import { Story, Meta } from '@storybook/react'
import InfoBox, { InfoBoxProps } from '.'

export default {
  title: 'InfoBox',
  component: InfoBox,
  args: {
    title: 'sneaker company',
    subtitle: 'Fall Limited Edition Sneakers',
    promotionalPrice: 'R$125.00',
    price: '$250.00',
    promotion: '50%',
    description:
      "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll whitstand everything the weather can offer"
  }
} as Meta

export const Default: Story<InfoBoxProps> = (args) => <InfoBox {...args} />
