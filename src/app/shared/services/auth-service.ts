import { instance } from '../instance/axios-instance/axios-instance';
import { RegistrationFormData } from '../../shared-modules/auth-dialog/components/registration-form/registration-form';

const AuthService = () => ({
  login: async (
    data: URLSearchParams,
    // loadUser: () => void,
    setIsLoading: (isLoading: boolean) => void
  ): Promise<void> => {
    try {
      await instance.post('/auth', data).then((response) => {
        localStorage.setItem('token', response.data.access_token);
      });

      // loadUser();
      setIsLoading(true);
    } catch (e) {
      console.error(e);
    }
  },

  registration: async (
    data: RegistrationFormData,
    // loadUser: () => void,
    setIsLoading: (isLoading: boolean) => void
  ): Promise<void> => {
    try {
      await instance.post('/auth/registration', data);
      // loadUser();
      setIsLoading(true);
    } catch (e) {
      console.error(e);
    }
  },
});

export default AuthService();
