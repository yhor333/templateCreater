import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../../pages/home';
import useUserStore from '../../../store/user-store';
import { privateRoutes, publicRoutes } from './constants/routes';
import { CustomRoute } from './components/custom-route';
import Redirect from './components/redirect';

export const RoutesProvider: FC = () => {
  const user = useUserStore((state) => state.user);
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <CustomRoute>
            <HomePage />
          </CustomRoute>
        }
      />
      {!user
        ? publicRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <CustomRoute key={item.path}>
                  <item.component />
                </CustomRoute>
              }
            />
          ))
        : publicRoutes.concat(privateRoutes).map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <CustomRoute key={item.path}>
                  <item.component />
                </CustomRoute>
              }
            />
          ))}
      <Route path={'*'} element={<Redirect />} />
    </Routes>
  );
};
