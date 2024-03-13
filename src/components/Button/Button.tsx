import styled from '@emotion/styled'
import gsap from 'gsap'
import {
  ComponentProps,
  MutableRefObject,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../../styles/ThemeProvider'
import { ThemeTypes } from '../../styles/theme/ThemeTypes'

export interface ButtonProps extends ComponentProps<'button'> {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  label: string
  variant?: 'text' | 'filled' | 'outlined'
  startIcon?: ReactNode
  endIcon?: ReactNode
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

interface ThemeProps {
  theme: ThemeTypes
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

interface RippleProps extends ThemeProps {
  diameter: number
}

const ButtonBase = styled.button<ThemeProps>((props) => ({
  outline: 'none',
  background: 'none',
  border: 'none',
  color: props.theme.colors.common.text,
  backgroundColor: 'transparent',
  overflow: 'hidden',
  position: 'relative',
  textTransform: 'uppercase',
  paddingTop: props.theme.spacing(1),
  paddingBottom: props.theme.spacing(1),
  paddingLeft: props.theme.spacing(2),
  paddingRight: props.theme.spacing(2),
}))

const Wrapper = styled.div({
  position: 'relative',
  overflow: 'hidden',
})

const Ripple = styled.span<RippleProps>((props) => ({
  position: 'absolute',
  borderRadius: '50%',
  transform: 'scale(0)',
  width: props.diameter,
  height: props.diameter,
  backgroundColor: props.theme.colors.brand[props.color][200] + '55',
}))

const Label = styled.span({
  color: 'inherit',
})

const TextButton = styled(ButtonBase)<ThemeProps>((props) => ({
  backgroundColor: props.theme.colors.brand[props.color][500] + '00',
  color: props.theme.colors.brand[props.color][500],
}))

const FilledButton = styled(ButtonBase)<ThemeProps>((props) => ({
  backgroundColor: props.theme.colors.brand[props.color][500],
  color: props.theme.colors.common.text,
}))

const OutlinedButton = styled(ButtonBase)<ThemeProps>((props) => ({
  color: props.theme.colors.brand[props.color][500],
  backgroundColor: props.theme.colors.brand[props.color][500] + '00',
  border: '1px solid',
  borderColor: props.theme.colors.brand[props.color][500],
}))

const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ onClick, label = '', variant = 'text', startIcon, endIcon, color = 'blue' }, ref) => {
    const theme = useTheme()
    const [diameter, setDiameter] = useState<number>(0)
    const ButtonRef = useRef() as MutableRefObject<HTMLButtonElement>
    const RippleRef = useRef() as MutableRefObject<HTMLSpanElement>

    useEffect(() => {
      if (ButtonRef.current) {
        setDiameter(Math.max(ButtonRef.current.clientWidth, ButtonRef.current.clientHeight))
      }
    }, [])

    // === Animations
    const hoverOn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      gsap.to(e.currentTarget, {
        backgroundColor:
          variant === 'filled'
            ? theme.colors.brand[color][600]
            : theme.colors.brand[color][600] + '22',
        borderColor:
          variant !== 'text'
            ? theme.colors.brand[color][600]
            : theme.colors.brand[color][600] + '22',
        duration: 0.3,
        ease: 'power1.inOut',
      })
    }

    const hoverOff = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      gsap.to(e.currentTarget, {
        backgroundColor:
          variant === 'filled'
            ? theme.colors.brand[color][500]
            : theme.colors.brand[color][500] + '00',
        borderColor: variant === 'text' ? 'transparent' : theme.colors.brand[color][500],
        duration: 0.3,
        ease: 'power1.inOut',
      })
    }

    const clickAnim = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = e.currentTarget
      const buttonBox = button.getBoundingClientRect()

      if (button) {
        gsap.fromTo(
          [RippleRef.current],
          {
            left: e.clientX - (buttonBox.left + diameter / 2),
            top: e.clientY - (buttonBox.top + diameter / 2),
            opacity: 1,
            scale: 0,
          },
          {
            scale: 3,
            opacity: 0,
            duration: 0.3,
            ease: 'linear',
            onComplete: onClick,
          }
        )
        gsap.to([RippleRef.current], {
          opacity: 0,
          scale: 0,
          duration: 0,
          delay: 0.4,
        })
      }
    }

    if (variant === 'text') {
      return (
        <Wrapper ref={ref}>
          <TextButton
            ref={ButtonRef}
            color={color}
            theme={theme}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={clickAnim}>
            <Label>
              {startIcon} {label} {endIcon}
            </Label>
          </TextButton>
          <Ripple
            ref={RippleRef}
            theme={theme}
            diameter={diameter}
            color={color}
          />
        </Wrapper>
      )
    }
    if (variant === 'filled') {
      return (
        <Wrapper ref={ref}>
          <FilledButton
            ref={ButtonRef}
            color={color}
            theme={theme}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={clickAnim}>
            <Label>
              {startIcon} {label} {endIcon}
            </Label>
          </FilledButton>
          <Ripple
            ref={RippleRef}
            theme={theme}
            diameter={diameter}
            color={color}
          />
        </Wrapper>
      )
    }
    if (variant === 'outlined') {
      return (
        <Wrapper ref={ref}>
          <OutlinedButton
            ref={ButtonRef}
            color={color}
            theme={theme}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            onClick={clickAnim}>
            <Label>
              {startIcon} {label} {endIcon}
            </Label>
          </OutlinedButton>
          <Ripple
            ref={RippleRef}
            theme={theme}
            diameter={diameter}
            color={color}
          />
        </Wrapper>
      )
    }
  }
)

export default Button
