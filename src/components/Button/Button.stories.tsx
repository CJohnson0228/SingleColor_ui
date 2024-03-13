import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  title: 'Input/Button',
  component: Button,
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
    variant: { control: 'select', options: ['outlined', 'filled', 'text'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default Button',
    onClick: () => console.log('clicked'),
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Button',
    color: 'red',
    onClick: () => console.log('clicked'),
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
    onClick: () => console.log('clicked'),
  },
}
export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text Button',
    onClick: () => console.log('clicked'),
  },
}
