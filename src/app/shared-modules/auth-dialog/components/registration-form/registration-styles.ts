const RegistrationFormStyles = {
  box: { display: 'flex', justifyContent: 'space-between' },
  formBox: { display: 'flex', flexDirection: 'column' },
  field: { mb: 1 },
  email: { mt: 4 },
  formControl: { mt: 2 },
  authButton: {
    'justifyContent': 'flex-start',
    'fontSize': 12,
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  submitButton: {
    'mt': 2,
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
};

export default RegistrationFormStyles;
