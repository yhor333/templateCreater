import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D9D9D9',
      dark: '#000000',
      light: '#51544f',
    },
    secondary: {
      main: '#59B267',
      dark: '#000',
    },
  },
  typography: {
    fontFamily: `'JetBrains Mono', monospace`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
