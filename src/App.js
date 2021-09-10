import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from './initialTheme';
import ButtonComponent from 'components/button';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <ButtonComponent title="A button"/>
    </ThemeProvider>
  )
}
