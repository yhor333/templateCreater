const GenerateStyles = {
  container: { mt: 15 },
  imgWrap: { marginLeft: 'auto', marginRight: 'auto' },
  button: {
    backgroundColor: 'primary.main',
    color: 'primary.dark',
    mt: 1,
    mr: 1,
    width: '146px',
    fontSize: 18,
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
    minWidth: '340px',
    minHeight: '400px',
  },
};

export default GenerateStyles;
