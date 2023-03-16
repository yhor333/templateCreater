const HeaderLogoStyles = {
  logo: (isMobile: boolean) => ({
    mr: 2,
    display: isMobile ? { xs: 'flex', md: 'none' } : { xs: 'none', md: 'flex' },
    justifyContent: 'flex-start',
    flexGrow: 1,
  }),
};

export default HeaderLogoStyles;
