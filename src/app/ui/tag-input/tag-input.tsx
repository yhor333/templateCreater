import { FC, useState } from 'react';
import Modal from 'react-modal';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import TagInputStyles from './tag-input-styles';
import IconButton from '@mui/material/IconButton';

interface ITagInput {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TagInput: FC<ITagInput> = ({ title, onChange, handleButton }) => {
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Box sx={TagInputStyles.wrap}>
      <Typography sx={TagInputStyles.title}>{title}</Typography>
      <Box sx={TagInputStyles.textFieldWrap}>
        <IconButton
          sx={TagInputStyles.iconButton}
          onClick={() => {
            setInputValue('');
            setIsFileUpload(false);
          }}
        >
          <ClearIcon />
        </IconButton>
        <TextareaAutosize
          id={`filled-hidden-normal-${title}`}
          disabled={isFileUpload}
          onChange={(e: any): void => {
            setInputValue(e.target.value);
            onChange(e);
          }}
          name={title}
          value={inputValue}
          style={TagInputStyles.textField}
        />
      </Box>

      <Box sx={TagInputStyles.buttonsWrap}>
        <Button component="label" sx={TagInputStyles.button}>
          Load file
          <input
            type="file"
            hidden
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files;
              if (file !== null) {
                handleButton(event);
                setInputValue(file[0].name);
                setIsFileUpload(true);
              }
            }}
          />
        </Button>
        <Button sx={TagInputStyles.button} onClick={openModal}>
          preset
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={TagInputStyles}
          contentLabel="Example Modal"
        >
          <ClearIcon onClick={closeModal} />
          <button>Save current</button>
          <button>Сhoose an existing one </button>
        </Modal>
      </Box>
    </Box>
  );
};

export default TagInput;
