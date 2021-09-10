import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from 'themes/Themes';
import HomePage from 'pages/HomePage/index.js';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <HomePage/>
    </ThemeProvider>
  )
}
