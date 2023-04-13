import { FC } from 'react';

import GeneratePage from '../../../../pages/generate';

interface IRoute {
  path: string;
  component: FC;
}

export const publicRoutes: IRoute[] = [
  {
    path: '/generate',
    component: GeneratePage,
  },
];

export const privateRoutes: IRoute[] = [];
