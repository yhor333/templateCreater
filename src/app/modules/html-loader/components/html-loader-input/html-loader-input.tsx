import React, { useEffect } from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import htmlLoaderService from '../../api/html-loader-service';

import HtmlLoaderInputStyle from './html-loader-input-style';
const HtmlLoaderInput = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState('No file...');
  // const [isLoading, setIsLoading] = useState(false);

  async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;

    if (file !== null) {
      htmlLoaderService.sendFile(file[0]);
      setSelectedFile(file[0].name);
      navigate('/generate');
    }
  }

  useEffect(() => {});

  return (
    <>
      <Typography sx={HtmlLoaderInputStyle.title}>
        Load HTML template
      </Typography>
      <Box sx={HtmlLoaderInputStyle.inputWrap}>
        <Button component="label" sx={HtmlLoaderInputStyle.uploadButton}>
          Browse
          <input type="file" hidden onChange={changeHandler} />
        </Button>
        <Typography sx={HtmlLoaderInputStyle.selectedFile}>
          {selectedFile}
        </Typography>
      </Box>
    </>
  );
};

export default HtmlLoaderInput;
