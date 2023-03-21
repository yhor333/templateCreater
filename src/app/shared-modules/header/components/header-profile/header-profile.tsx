import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useUserStore from '../../../../store/user-store';
import HeaderProfileStyles from './header-profile-styles';
import { AuthDialog } from '../../../auth-dialog';

const HeaderProfile: FC = () => {
  const user = useUserStore((state) => state.user);
  return (
    <Fragment>
      {user ? (
        <Box>
          <Link to={'/profile'}>
            <IconButton sx={HeaderProfileStyles.iconButton}></IconButton>
          </Link>
        </Box>
      ) : (
        <AuthDialog>
          <IconButton sx={HeaderProfileStyles.iconButton}>
            <AccountCircleIcon sx={HeaderProfileStyles.accountCircleIcon} />
          </IconButton>
        </AuthDialog>
      )}
    </Fragment>
  );
};

export default HeaderProfile;
