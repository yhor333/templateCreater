import { FC, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import useUserStore from '../../../../store/user-store';
import RegistrationFormStyles from './registration-styles';
import { CustomDialogTitle } from '../../../dialog';
import { CustomFormControl } from '../../../custom-form';
import { AuthStateEnum } from '../auth-dialog';

const schema = yup
  .object({
    username: yup
      .string()
      .min(4, "Придумайте ім'я, яке буде складатись з 4-ох символів")
      .required('Це поле повинно бути заповнене'),
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
export type RegistrationFormData = yup.InferType<typeof schema>;

const formControlStyles = {
  formControl: RegistrationFormStyles.formControl,
  input: RegistrationFormStyles.field,
};

interface IRegistrationForm {
  onClose: () => void;
  toggleAuthState: (authState: AuthStateEnum) => void;
}

const RegistrationForm: FC<IRegistrationForm> = ({
  onClose,
  toggleAuthState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(schema),
  });
  // const loadUser = useUserStore((state) => state.loadUser);
  // const setIsLoading = useUserStore((state) => state.setIsLoading);

  // const onSubmit = async (data: RegistrationFormData) => {
  //   await AuthService.registration(data, loadUser, setIsLoading).catch(
  //     (error) => console.log(error)
  //   );
  // };

  return (
    <Fragment>
      <Box sx={RegistrationFormStyles.box}>
        <CustomDialogTitle id={'registration-title'} onClose={onClose}>
          Реєстрація
        </CustomDialogTitle>
      </Box>
      <form className="form">
        <Box sx={RegistrationFormStyles.formBox}>
          <CustomFormControl<'username'>
            register={register('username')}
            error={errors.username?.message}
            label={"Ім'я"}
            styles={formControlStyles}
          />
          <CustomFormControl<'email'>
            register={register('email')}
            error={errors.email?.message}
            label={'Емейл'}
            styles={formControlStyles}
          />
          <CustomFormControl<'password'>
            register={register('password')}
            label={'Пароль'}
            error={errors.password?.message}
            styles={formControlStyles}
            isPassword
          />
          <Button
            sx={RegistrationFormStyles.authButton}
            onClick={() => toggleAuthState(AuthStateEnum.Login)}
          >
            Вже є створений аккаут?
          </Button>
          <Button
            sx={RegistrationFormStyles.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Зареєструватись
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default RegistrationForm;
