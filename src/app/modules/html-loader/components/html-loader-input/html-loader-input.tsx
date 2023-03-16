import React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    <Box sx={{ display: 'flex' }}>
      <Button
        component="label"
        sx={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRight: '1px solid #AEAEAE',
          backgroundColor: '#D4D4D4',
          color: 'primary.dark',
        }}
      >
        Browse
        <input type="file" hidden onChange={changeHandler} />
      </Button>
      <Typography sx={{ pt: 1, backgroundColor: '#EAEAEA', width: '300px' }}>
        {selectedFile}
      </Typography>
    </Box>
  );
};

export default HtmlLoaderInput;
