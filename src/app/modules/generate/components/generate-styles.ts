const GenerateStyles = {
  container: { mt: 15 },
  imgWrap: { marginLeft: 'auto', marginRight: 'auto' },
  button: {
    backgroundColor: 'primary.main',
    color: 'primary.dark',
    mt: 2,
    width: '300px',
    fontSize: 20,
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
    minWidth: '300px',
    minHeight: '400px',
  },
};

export default GenerateStyles;
