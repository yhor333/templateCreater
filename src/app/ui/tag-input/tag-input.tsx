import { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import TagInpuStyles from './tag-input-styles';
import IconButton from '@mui/material/IconButton';

interface ITagInput {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TagInput: FC<ITagInput> = ({ title, onChange, handleButton }) => {
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [inputValue, setInputValue] = useState('');
  return (
    <Box sx={TagInpuStyles.wrap}>
      <Typography sx={TagInpuStyles.title}>{title}</Typography>
      <Box sx={TagInpuStyles.textFieldWrap}>
        <IconButton
          sx={TagInpuStyles.iconButton}
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
          style={TagInpuStyles.textField}
        />
      </Box>

      <Box sx={TagInpuStyles.buttonsWrpa}>
        <Button component="label" sx={TagInpuStyles.button}>
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
        <Button sx={TagInpuStyles.button}>preset</Button>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default TagInput;
