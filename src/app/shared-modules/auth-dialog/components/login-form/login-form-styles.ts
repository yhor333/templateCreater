const LoginFormStyles = {
  box: { display: 'flex', justifyContent: 'space-between' },
  formBox: { display: 'flex', flexDirection: 'column' },
  field: { mb: 1 },
  email: { mt: 4 },
  formControl: { mt: 2 },
  authButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  authButton: {
    justifyContent: 'flex-start',
    fontSize: 12,
    color: 'primary.dark',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  submitButton: {
    mt: 2,
    '&:hover': {
      backgroundColor: 'secondary.main',
    },
  },
};

export default LoginFormStyles;
