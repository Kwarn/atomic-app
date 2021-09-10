import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from './themes/InitialTheme.js';
import ButtonComponent from 'components/atoms/Button';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <ButtonComponent title="A button"/>
    </ThemeProvider>
  )
}
