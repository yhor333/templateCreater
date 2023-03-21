import { FC, Fragment, ReactNode, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import useUserStore from '../../../store/user-store';
import AuthProviderStyles from './auth-provider-styles';

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  // const loadUser = useUserStore((state) => state.loadUser);
  const setIsLoading = useUserStore((state) => state.setIsLoading);
  const isLoading = useUserStore((state) => state.isLoading);

  useEffect(() => {
    if (localStorage.get('token')) {
      // loadUser();
    } else {
      setIsLoading(false);
    }
  }, []);
  return isLoading ? (
    <Box sx={AuthProviderStyles.box}>
      <CircularProgress />
    </Box>
  ) : (
    <Fragment>{children}</Fragment>
  );
};
