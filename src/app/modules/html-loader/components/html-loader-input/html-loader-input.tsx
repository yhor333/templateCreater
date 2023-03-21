import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import htmlLodareServise from '../../api/html-loader-servise';

import HtmlLoaderinputStyle from './html-loader-input-style';

const HtmlLoaderInput = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState('No file...');
  const [tags, setTags] = useState(['tag1, tag2, tag3, tag4']);
  const [isLoading, setIsLoading] = useState(false);

  async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;

    if (file !== null) {
      htmlLodareServise.sendFiel(file[0], setTags);
      setSelectedFile(file[0].name);
      navigate('/generete');
    }
  }

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
