import { FC, Fragment, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useUserStore from '../../../../store/user-store';
import checkRoutes from '../helpers/check-routes';
import pageTitles from '../constants/page-titles';

interface IGuardRoute {
  children: ReactNode;
}

export const CustomRoute: FC<IGuardRoute> = ({ children }) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const location = useLocation();

  useEffect(() => {
    if (!checkRoutes(user)) {
      setUser(null);
    }
    document.title = pageTitles[location.pathname];
  });
  return <Fragment>{children}</Fragment>;
};
