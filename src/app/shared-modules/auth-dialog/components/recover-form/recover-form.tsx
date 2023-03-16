import { FC, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import RecoverFormStyles from './recover-styles';
import { CustomDialogTitle } from '../../../dialog';
import { CustomFormControl } from '../../../custom-form';
import { AuthStateEnum } from '../auth-dialog';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Це поле повинно бути емейлом')
      .required('Це поле повинно бути заповнене'),
  })
  .required();
export type RecoverFormData = yup.InferType<typeof schema>;

const formControlStyles = {
  formControl: RecoverFormStyles.formControl,
  input: RecoverFormStyles.field,
};

interface IRecoverForm {
  onClose: () => void;
  toggleAuthState: (authState: AuthStateEnum) => void;
}

const RecoverForm: FC<IRecoverForm> = ({ onClose, toggleAuthState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RecoverFormData) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Box sx={RecoverFormStyles.box}>
        <CustomDialogTitle id={'recover-title'} onClose={onClose}>
          Відновлення аккаунта
        </CustomDialogTitle>
      </Box>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={RecoverFormStyles.formBox}>
          <CustomFormControl<'email'>
            register={register('email')}
            error={errors.email?.message}
            label={'Емейл'}
            styles={formControlStyles}
          />
          <Button
            sx={RecoverFormStyles.authButton}
            onClick={() => toggleAuthState(AuthStateEnum.Login)}
          >
            Повернутись на меню входу?
          </Button>
          <Button
            sx={RecoverFormStyles.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Відновити аккаунт
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default RecoverForm;
