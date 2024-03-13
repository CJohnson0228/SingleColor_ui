import { FC, PropsWithChildren, ReactElement, createContext, useContext } from 'react'
import { ThemeTypes } from './theme/ThemeTypes'
import { lightTheme } from './theme/lightTheme'

export const ThemeContext = createContext(lightTheme)
export const ColorContext = createContext('blue')

interface ProviderProps extends PropsWithChildren {
  theme: ThemeTypes
  children: ReactElement
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink'
}

const ThemeProvider: FC<ProviderProps> = (props) => {
  const { theme = lightTheme, color = 'blue', children } = props
  return (
    <ColorContext.Provider value={color}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ColorContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

const useColor = () => {
  const context = useContext(ColorContext)

  if (context === undefined) {
    throw new Error('useColor must be used within a ThemeProvider')
  }

  return context
}

export {
  ThemeProvider,
  // eslint-disable-next-line react-refresh/only-export-components
  useColor,
  // eslint-disable-next-line react-refresh/only-export-components
  useTheme,
}
