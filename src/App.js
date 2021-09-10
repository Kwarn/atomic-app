import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from './initialTheme';
import ButtonComponent from 'components/ButtonComponent';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <ButtonComponent title="A button"/>
    </ThemeProvider>
  )
}
