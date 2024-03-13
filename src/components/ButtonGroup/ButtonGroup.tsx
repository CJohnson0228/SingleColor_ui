import styled from '@emotion/styled'
import { Children, ComponentProps, ReactElement, ReactNode, cloneElement, forwardRef } from 'react'
import { ButtonProps } from '../Button/Button'

export interface ButtonGroupProps extends ComponentProps<'div'> {
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
  variant?: 'outlined' | 'filled' | 'text'
}

const ButtonGroupBase = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

const renderChildren = (
  children: ReactNode | ReactNode[],
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink',
  variant: 'outlined' | 'filled' | 'text'
) => {
  return Children.map(children, (child) => {
    if (child) {
      return cloneElement(child as ReactElement<ButtonProps>, {
        color: color,
        variant: variant,
      })
    }
  })
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ color = 'blue', variant = 'text', children, ...props }, ref) => {
    return (
      <ButtonGroupBase
        ref={ref}
        {...props}>
        {renderChildren(children, color, variant)}
      </ButtonGroupBase>
    )
  }
)

export default ButtonGroup
