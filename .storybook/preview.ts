import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { darkTheme } from '../src/styles/theme/darkTheme'
import { lightTheme } from '../src/styles/theme/lightTheme'

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
  }),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#212121',
        },
        {
          name: 'Light',
          value: '#dedede',
        },
      ],
    },
  },
  decorators: decorators,
}

export default preview
