import { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

interface ITagInput {
  title: string;
}

const TagInput: FC<ITagInput> = ({ title }) => {
  const [isFileUpload, setIsFileUpload] = useState(false);
  return (
    <Grid item>
      <Typography>{title}</Typography>
      <TextField
        hiddenLabel
        id={`filled-hidden-normal-${title}`}
        variant="filled"
        disabled={isFileUpload}
      />
      <Box>
        <Button component="label">
          Load file
          <input type="file" hidden />
        </Button>
        <Button>preset</Button>
      </Box>
      <Box></Box>
    </Grid>
  );
};

export default TagInput;
