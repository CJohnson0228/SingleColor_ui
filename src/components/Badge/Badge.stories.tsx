import type { Meta, StoryObj } from '@storybook/react'

import Badge from './Badge'

const meta = {
  title: 'Information/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink'],
    },
    variant: { control: 'select', options: ['add', 'subtract', 'primary'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '5k',
  },
}
export const Add: Story = {
  args: {
    label: '+27',
    variant: 'add',
  },
}
export const Subtract: Story = {
  args: {
    label: '-10',
    variant: 'subtract',
  },
}
