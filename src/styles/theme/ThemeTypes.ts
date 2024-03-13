export type PaletteItem = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ThemeTypes = {
  colors: {
    mode: 'light' | 'dark'
    common: {
      black: string
      white: string
      background: string
      paper: string
      text: string
    }
    contrastText: (hexColor: string) => string
    brand: {
      red: PaletteItem
      orange: PaletteItem
      yellow: PaletteItem
      green: PaletteItem
      blue: PaletteItem
      violet: PaletteItem
      purple: PaletteItem
      pink: PaletteItem
    }
    grey: PaletteItem
    error: PaletteItem
    warning: PaletteItem
    success: PaletteItem
  }
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    max: number
  }
  shadows: {
    boxShadows: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
    textShadows: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
  }
  zIndex: {
    appBar: number
    drawer: number
    modal: number
    sidebar: number
    snackbar: number
    subappbar: number
    tooltip: number
  }
  spacing: (value: number) => string
}

const hexToRgb = (hexInput: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexInput)
  if (result !== null) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
  } else {
    return { r: 0, g: 0, b: 0 }
  }
}

const luminance = (hexInput: string) => {
  const sRGB = hexToRgb(hexInput)
  const R = sRGB.r / 255 <= 0.04045 ? sRGB.r / 255 / 12.92 : ((sRGB.r / 255 + 0.055) / 1.055) ** 2.4
  const G = sRGB.g / 255 <= 0.04045 ? sRGB.g / 255 / 12.92 : ((sRGB.g / 255 + 0.055) / 1.055) ** 2.4
  const B = sRGB.b / 255 <= 0.04045 ? sRGB.b / 255 / 12.92 : ((sRGB.b / 255 + 0.055) / 1.055) ** 2.4
  const L = 0.2126 * R + 0.7152 * G + 0.0722 * B
  return L
}

export const calcContrastText = (background: string, text: string) => {
  const lum1 = luminance(background)
  const lum2 = luminance(text)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  const value = brightest / darkest
  return value
}
