import { Role } from './role';

export interface UserModel {
  id: string;
  email: string;
  username: string;
  roles: Role[];
}
