import { instance } from '../instance/axios-instance/axios-instance';
import { LoginFormData } from '../../shared-modules/auth-dialog/components/login-form/login-form';
import { UserModel } from '../../shared-models/user-model';
import { RegistrationFormData } from '../../shared-modules/auth-dialog/components/registration-form/registration-form';

const Cookies = require('js-cookie');

const AuthService = () => ({
  login: async (
    data: URLSearchParams,
    loadUser: () => void,
    setIsLoading: (isLoading: boolean) => void
  ): Promise<void> => {
    try {
      await instance.post('/auth', data).then((response) => {
        localStorage.setItem('token', response.data.access_token);
      });

      loadUser();
      setIsLoading(true);
    } catch (e) {
      console.error(e);
    }
  },

  registration: async (
    data: RegistrationFormData,
    loadUser: () => void,
    setIsLoading: (isLoading: boolean) => void
  ): Promise<void> => {
    try {
      await instance.post('/auth/registration', data);
      loadUser();
      setIsLoading(true);
    } catch (e) {
      console.error(e);
    }
  },

  logout: (setUser: (user: UserModel | null) => void): void => {
    try {
      Cookies.remove('accessToken');
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  },
});

export default AuthService();
