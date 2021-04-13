import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-rounded/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy now'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  as: 'a',
  href: '/link'
}

export const minimal: Story = (args) => <Button {...args} />

minimal.args = {
  minimal: true
}
