import { FC, ReactNode } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface ICustomDialogTitle {
  id: string;
  children?: ReactNode;
  onClose?: () => void;
}

const CustomDialogTitle: FC<ICustomDialogTitle> = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
export default CustomDialogTitle;
