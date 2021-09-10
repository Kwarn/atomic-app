import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import baseTheme from './themes/InitialTheme.js';
import ButtonComponent from 'components/atoms/Button';
import AddEventBanner from 'components/organisms/AddEvent/index.js';

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <AddEventBanner onSubmit={(e)=> console.log(`e`, e)}/>
    </ThemeProvider>
  )
}
