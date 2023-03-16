import { FC, Fragment, ReactNode, useState } from 'react';

import Box from '@mui/material/Box';

import { CustomDialog } from '../../dialog';
import AuthLayout from './auth-layout/auth-layout';
import RegistrationForm from './registration-form/registration-form';
import LoginForm from './login-form/login-form';
import RecoverForm from './recover-form/recover-form';

export enum AuthStateEnum {
  Login = 'login',
  Registration = 'registration',
  Recover = 'recover',
}

interface IAuthDialog {
  children: ReactNode;
}

const AuthDialog: FC<IAuthDialog> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthStateEnum>(AuthStateEnum.Login);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOpen = () => setIsVisible(!isVisible);
  const handleClose = () => setIsVisible(false);

  const toggleAuthState = (authState: AuthStateEnum) => {
    setAuthState(authState);
  };

  return (
    <Fragment>
      <Box onClick={handleOpen}>{children}</Box>
      <CustomDialog isVisible={isVisible} setIsVisible={setIsVisible}>
        <AuthLayout>
          {authState === AuthStateEnum.Login && <LoginForm onClose={handleClose} toggleAuthState={toggleAuthState} />}
          {authState === AuthStateEnum.Registration && (
            <RegistrationForm onClose={handleClose} toggleAuthState={toggleAuthState} />
          )}
          {authState === AuthStateEnum.Recover && (
            <RecoverForm onClose={handleClose} toggleAuthState={toggleAuthState} />
          )}
        </AuthLayout>
      </CustomDialog>
    </Fragment>
  );
};

export default AuthDialog;
