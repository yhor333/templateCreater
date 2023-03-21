import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { redirectStyles } from './redirect-styles';

const Redirect = () => {
  return (
    <Fragment>
      <Box sx={redirectStyles.box}>
        <CircularProgress size={100} />
        <Typography>Переадресація...</Typography>
      </Box>
      <Navigate to={'/'} />
    </Fragment>
  );
};

export default Redirect;
