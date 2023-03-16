import { FC, forwardRef, ReactElement, ReactNode, Ref } from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ICustomDialog {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const CustomDialog: FC<ICustomDialog> = ({ children, isVisible, setIsVisible }) => {
  const handleClose = () => {
    setIsVisible(false);
  };

  const fullScreen = useMediaQuery('(max-width:765px)');
  return (
    <BootstrapDialog
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="customized-dialog"
      maxWidth="md"
      fullScreen={fullScreen}
      open={isVisible}
    >
      {children}
    </BootstrapDialog>
  );
};
export default CustomDialog;
