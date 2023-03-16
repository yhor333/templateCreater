import { FC } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import pages from '../../constants/pages';
import HeaderTabsStyles from './header-tabs-styles';

const HeaderTabs: FC = () => {
  return (
    <>
      <Box sx={HeaderTabsStyles.box}>
        {pages.map((page) => (
          <Link key={page.path} to={page.path}>
            <Button
              key={page.name}
              sx={HeaderTabsStyles.button}
              className="opacity-hover"
            >
              {page.name}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default HeaderTabs;
