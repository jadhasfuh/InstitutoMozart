import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Contenedor from './components/Contenedor';
import theme from './theme-config';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>

  );
}

export default App;
