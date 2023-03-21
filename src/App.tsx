import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { Header } from './app/shared-modules/header';
import { RoutesProvider } from './app/shared/providers/routes-provider/routes-provider';

import { theme } from './global';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <RoutesProvider />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
