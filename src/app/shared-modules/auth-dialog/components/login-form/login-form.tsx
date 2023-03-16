import { FC, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import useUserStore from '../../../../store/user-store';
import { CustomDialogTitle } from '../../../dialog';
import { CustomFormControl } from '../../../custom-form';
import { AuthStateEnum } from '../auth-dialog';

import LoginFormStyles from './login-form-styles';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Це поле повинно бути емейлом')
      .required('Це поле повинно бути заповнене'),
    password: yup
      .string()
      .min(8, 'Пароль повинен містити мінімум 8 символів')
      .required('Це поле повинно бути заповнене'),
  })
  .required();

export type LoginFormData = yup.InferType<typeof schema>;

const formControlStyles = {
  formControl: LoginFormStyles.formControl,
  input: LoginFormStyles.field,
};

interface ILoginForm {
  onClose: () => void;
  toggleAuthState: (authState: AuthStateEnum) => void;
}

const LoginForm: FC<ILoginForm> = ({ onClose, toggleAuthState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  // const loadUser = useUserStore((state) => state.loadUser);
  // const setIsLoading = useUserStore((state) => state.setIsLoading);

  // const onSubmit = async (data: LoginFormData) => {
  //   AuthService.login(data, loadUser, setIsLoading).catch((error) =>
  //     console.log(error)
  //   );
  // };
  return (
    <Fragment>
      <Box sx={LoginFormStyles.box}>
        <CustomDialogTitle id={'login-title'} onClose={onClose}>
          Вхід в особистий кабінет
        </CustomDialogTitle>
      </Box>
      <form className="form">
        <Box sx={LoginFormStyles.formBox}>
          <CustomFormControl<'email'>
            register={register('email')}
            error={errors.email?.message}
            label={'Емейл'}
            styles={formControlStyles}
          />
          <CustomFormControl
            register={register('password')}
            label={'Пароль'}
            error={errors.password?.message}
            styles={formControlStyles}
            isPassword
          />
          <Box sx={LoginFormStyles.authButtons}>
            <Button
              sx={LoginFormStyles.authButton}
              onClick={() => toggleAuthState(AuthStateEnum.Registration)}
            >
              Немає аккаунта?
            </Button>
            <Button
              sx={LoginFormStyles.authButton}
              onClick={() => toggleAuthState(AuthStateEnum.Recover)}
            >
              Забули пароль?
            </Button>
          </Box>
          <Button
            sx={LoginFormStyles.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Увійти
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default LoginForm;
