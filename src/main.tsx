import React from 'react'
import ReactDOM from 'react-dom/client'
import 'the-new-css-reset/css/reset.css'
import { ThemeProvider } from './styles/ThemeProvider'
import { darkTheme } from './styles/theme/darkTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      theme={darkTheme}
      color={'blue'}>
      <div>Single Color ui kit</div>
    </ThemeProvider>
  </React.StrictMode>
)
