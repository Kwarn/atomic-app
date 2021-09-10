import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from './initialTheme';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      
    </ThemeProvider>
  )
}
