import React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import HtmlLoaderinputStyle from './html-loader-input-style';

const HtmlLoaderInput = () => {
  const [selectedFile, seSelectedFile] = useState('No file...');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file !== null) {
      console.log(file[0].name);
      seSelectedFile(file[0].name);
    }
  };

  return (
    <>
      <Typography sx={HtmlLoaderinputStyle.title}>
        Load HTML template
      </Typography>
      <Box sx={HtmlLoaderinputStyle.inputWrap}>
        <Button component="label" sx={HtmlLoaderinputStyle.uploadButton}>
          Browse
          <input type="file" hidden onChange={changeHandler} />
        </Button>
        <Typography sx={HtmlLoaderinputStyle.selectedFile}>
          {selectedFile}
        </Typography>
      </Box>
    </>
  );
};

export default HtmlLoaderInput;
