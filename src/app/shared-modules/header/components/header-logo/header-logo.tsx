import { FC } from 'react';

import Box from '@mui/material/Box';

import HeaderLogoStyles from './header-logo-styles';
import { Typography } from '@mui/material';

interface IHeaderLogo {
  isMobile?: boolean;
}

const HeaderLogo: FC<IHeaderLogo> = ({ isMobile = false }) => {
  return (
    <>
      <Box sx={HeaderLogoStyles.logo(isMobile)}>
        <Typography component={'a'} href={'/'} variant={'h6'}>
          droox
        </Typography>
      </Box>
    </>
  );
};

export default HeaderLogo;
