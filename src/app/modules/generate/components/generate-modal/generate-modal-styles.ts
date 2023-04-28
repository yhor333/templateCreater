const GenerateModalStyles = {
  button: {
    fontSize: '12px',
    height: '48px',
    backgroundColor: 'primary.main',
    color: 'primary.dark',
    width: '100%',
    mb: 1,
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  wrap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    pt: 5,
  },
  clearIcon: { position: 'absolute', top: 0, right: 0 },
  textField: { mb: 2 },
  buttonWrap: { display: 'flex', justifyContent: 'space-between' },
};

export default GenerateModalStyles;
