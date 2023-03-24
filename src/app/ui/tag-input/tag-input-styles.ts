const TagInpuStyles = {
  wrap: { display: 'flex', mb: 5, justify: 'center' },
  title: { fontSize: '20px', alignSelf: 'center', mr: 4 },
  textFieldWrap: {
    width: '100%',
    mr: 2,
    position: 'relative',
  },
  buttonsWrpa: {
    display: 'flex',
    flexDirection: 'column',
    width: '110px',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: '12px',
    height: '24px',
    backgroundColor: 'primary.main',
    color: 'primary.dark',
    width: '86px',
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    cursor: 'pointer',
    zIndex: 10,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  },
  textField: { width: '100%' },
};

export default TagInpuStyles;
