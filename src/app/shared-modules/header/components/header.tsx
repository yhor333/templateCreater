import { FC } from 'react';

import HeaderLogo from './header-logo/header-logo';
import HeaderMenuPages from './header-menu/header-menu-pages';
import HeaderTabs from './header-tabs/header-tabs';
import HeaderLayout from './header-layout/header-layout';
import HeaderProfile from './header-profile/header-profile';

const Header: FC = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderLogo />
        <HeaderMenuPages />
        <HeaderLogo isMobile />
        <HeaderTabs />
        <HeaderProfile />
      </HeaderLayout>
    </>
  );
};

export default Header;
