import { FC, ReactNode } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

interface IHeaderLayout {
  children: ReactNode;
}

const HeaderLayout: FC<IHeaderLayout> = ({ children }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
