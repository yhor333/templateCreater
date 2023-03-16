import { FC, ReactNode } from 'react';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import AuthLayoutWrapStyles from './auth-layout-styles';

interface IAuthLayoutWrap {
  children: ReactNode;
}

const AuthLayoutWrap: FC<IAuthLayoutWrap> = ({ children }) => {
  const tablet = useMediaQuery('(max-width:765px)');
  const width = tablet ? '100%' : '640px';
  const height = tablet ? '100vh' : 'auto';

  return <Box sx={AuthLayoutWrapStyles.box(width, height)}>{children}</Box>;
};

export default AuthLayoutWrap;
