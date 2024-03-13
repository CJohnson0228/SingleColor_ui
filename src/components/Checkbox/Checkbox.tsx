import styled from '@emotion/styled'
import { ComponentProps, forwardRef, useState } from 'react'
import { useTheme } from '../../styles/ThemeProvider'

export interface CheckboxProps extends ComponentProps<'label'> {
  label?: string
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ label, color = 'blue', ...props }) => {
    const theme = useTheme()
    const [checked, setChecked] = useState<boolean>(false)

    const toggleChecked = () => setChecked(!checked)

    const CheckboxLabel = styled.label({
      display: 'block',
      position: 'relative',
      paddingLeft: theme.spacing(3.25),
      marginBottom: theme.spacing(1),
      cursor: 'pointer',
      fontSize: theme.spacing(2),
      userSelect: 'none',
      textTransform: 'capitalize',
      color: theme.colors.common.text,
    })

    const CheckboxInput = styled.input({
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,
    })

    const CheckboxCheckmark = styled.span({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '18px',
      width: '18px',
      border: '2px solid ' + theme.colors.brand[color][500],
      borderRadius: theme.spacing(0.5),
      backgroundColor: checked ? theme.colors.brand[color][600] : theme.colors.brand[color][800],
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.colors.brand[color][500] + '77',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        display: checked ? 'block' : 'none',
        left: '4px',
        top: '0px',
        width: '6px',
        height: '12px',
        border: 'solid ' + theme.colors.common.white,
        borderWidth: '0 2px 2px 0',
        transform: 'rotate(45deg)',
      },
    })

    return (
      <CheckboxLabel
        onClick={toggleChecked}
        {...props}>
        {label}
        <CheckboxInput />
        <CheckboxCheckmark></CheckboxCheckmark>
      </CheckboxLabel>
    )
  }
)

export default Checkbox
