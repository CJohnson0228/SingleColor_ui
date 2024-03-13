import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta = {
  title: 'Input/Checkbox',
  component: Checkbox,
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
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
}
