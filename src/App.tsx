import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { Header } from './app/shared-modules/header';

import { theme } from './global';

import './App.css';
import { HtmlLoader } from './app/modules/html-loader';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <HtmlLoader />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
