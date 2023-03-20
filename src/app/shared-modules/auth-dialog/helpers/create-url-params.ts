import { LoginFormData } from '../components/login-form/login-form';

export const createUrlParams = (data: LoginFormData) => {
  const params = new URLSearchParams();
  params.append('username', data.username);
  params.append('password', data.password);
  return params;
};
