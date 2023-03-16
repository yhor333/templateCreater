import { FC } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import HeaderMenu from './header-menu';
import HeaderMenuStyle from './header-menu-styles';

const HeaderMenuPages: FC = () => {
  return (
    <Box sx={HeaderMenuStyle.pagesWrapper}>
      <HeaderMenu>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </HeaderMenu>
    </Box>
  );
};

export default HeaderMenuPages;
