import { FC } from 'react';

import GeneretePage from '../../../../pages/generete';

interface IRoute {
  path: string;
  component: FC;
}

export const publicRoutes: IRoute[] = [
  {
    path: '/generete',
    component: GeneretePage,
  },
];

export const privateRoutes: IRoute[] = [];
