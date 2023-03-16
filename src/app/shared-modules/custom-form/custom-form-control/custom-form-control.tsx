import { MouseEvent, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';

interface ICustomFormControl<T extends string> {
  register: UseFormRegisterReturn<T>;
  label: string;
  styles: StylesType;
  isPassword?: boolean;
  error?: string;
}

type StylesType = {
  formControl: Record<string, string | number>;
  input: Record<string, string | number>;
};

const CustomFormControl = <T extends string>({ register, error, label, isPassword, styles }: ICustomFormControl<T>) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);

  const handleClickShowPassword = () => setIsVisiblePassword(!isVisiblePassword);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={styles.formControl} variant="outlined">
      <InputLabel htmlFor="outlined-adornment">{label}</InputLabel>
      <OutlinedInput
        {...register}
        label={label}
        error={Boolean(error)}
        sx={styles.input}
        type={isPassword && isVisiblePassword ? 'password' : 'text'}
        endAdornment={
          isPassword && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {isVisiblePassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
      {error && <Alert severity="error">{error}</Alert>}
    </FormControl>
  );
};

export default CustomFormControl;
