import { UserModel } from '../../../../shared-models/user-model';

const checkRoutes = (user: UserModel | null): null | true => {
  if (!localStorage.getItem('token') && user) {
    return null;
  }
  return true;
};

export default checkRoutes;
