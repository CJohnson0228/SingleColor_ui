import styled from '@emotion/styled'
import { ComponentProps, forwardRef } from 'react'
import { useTheme } from '../../styles/ThemeProvider'
import { ThemeTypes } from '../../styles/theme/ThemeTypes'

export interface BadgeProps extends ComponentProps<'span'> {
  label: string
  variant?: 'add' | 'subtract' | 'primary'
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

interface ThemeProps {
  theme: ThemeTypes
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

const BadgeBase = styled.span<ThemeProps>((props) => ({
  background: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: props.theme.spacing(2),
  color: props.theme.colors.common.text,
  fontSize: props.theme.spacing(2),
  fontWeight: 'bold',
  paddingBottom: props.theme.spacing(0.25),
  paddingLeft: props.theme.spacing(1.25),
  paddingRight: props.theme.spacing(1.5),
  paddingTop: props.theme.spacing(0.25),
  position: 'relative',
  textTransform: 'uppercase',
}))

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', color = 'blue', label, ...props }, ref) => {
    const theme = useTheme()

    const BadgeVariant = styled(BadgeBase)<ThemeProps>({
      backgroundColor:
        variant === 'primary'
          ? theme.colors.brand[color][500]
          : variant === 'add'
            ? theme.colors.mode === 'light'
              ? theme.colors.success[400] + '44'
              : theme.colors.success[500] + '22'
            : theme.colors.mode === 'light'
              ? theme.colors.error[400] + '44'
              : theme.colors.error[500] + '22',
      color:
        variant === 'primary'
          ? theme.colors.common.white
          : variant === 'add'
            ? theme.colors.mode === 'light'
              ? theme.colors.success[600]
              : theme.colors.success[500]
            : theme.colors.error[500],
    })

    return (
      <BadgeVariant
        ref={ref}
        theme={theme}
        color={color}
        {...props}>
        {label}
      </BadgeVariant>
    )
  }
)

export default Badge
