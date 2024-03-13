import type { Meta, StoryObj } from '@storybook/react'

import ButtonGroup from '.'
import Button from '../Button'

const meta = {
  title: 'Input/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink'],
    },
    variant: { control: 'select', options: ['outlined', 'filled', 'text'] },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: (args) => {
    return (
      <ButtonGroup
        variant='text'
        {...args}>
        <Button
          label='one'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='two'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='three'
          onClick={() => console.log('clicked')}
        />
      </ButtonGroup>
    )
  },
}

export const Filled: Story = {
  render: (args) => {
    return (
      <ButtonGroup
        variant='filled'
        {...args}>
        <Button
          label='one'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='two'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='three'
          onClick={() => console.log('clicked')}
        />
      </ButtonGroup>
    )
  },
}

export const Outlined: Story = {
  render: (args) => {
    return (
      <ButtonGroup
        variant='outlined'
        {...args}>
        <Button
          label='one'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='two'
          onClick={() => console.log('clicked')}
        />
        <Button
          label='three'
          onClick={() => console.log('clicked')}
        />
      </ButtonGroup>
    )
  },
}
