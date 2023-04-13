const TagInputStyles = {
  wrap: { display: 'flex', mb: 5, justify: 'center' },
  title: { fontSize: '20px', alignSelf: 'center', mr: 4 },
  textFieldWrap: {
    mr: 2,
    position: 'relative',
  },
  buttonsWrap: {
    display: 'flex',
    flexDirection: 'column',
    width: '110px',
    justifyContent: 'start',
  },
  button: {
    fontSize: '12px',
    height: '24px',
    backgroundColor: 'primary.main',
    color: 'primary.dark',
    width: '86px',
    mb: 1,
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  },
  textField: {
    paddingTop: '30px',
    maxWidth: '510px',
    width: '500px',
    minWidth: '150px',
    background: '#D9D9D9',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
  },
};

export default TagInputStyles;
