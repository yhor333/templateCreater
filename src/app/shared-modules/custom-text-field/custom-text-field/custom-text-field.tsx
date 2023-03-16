import { UseFormRegisterReturn } from 'react-hook-form';

import TextField from '@mui/material/TextField';

interface ICustomTextField<T extends string> {
  register: UseFormRegisterReturn<T>;
  label: string;
  styles: StylesType;
  isPassword?: boolean;
  defaultValue: string;
  error?: string;
}

type StylesType = {
  input: Record<string, string | number>;
};

const CustomTextField = <T extends string>({
  register,
  error,
  label,
  isPassword,
  styles,
  defaultValue,
}: ICustomTextField<T>) => {
  return (
    <TextField
      sx={styles.input}
      {...register}
      error={Boolean(error)}
      label={label}
      defaultValue={defaultValue}
      helperText={error}
    />
  );
};

export default CustomTextField;
