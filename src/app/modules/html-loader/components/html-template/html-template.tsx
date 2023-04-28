import { FC } from 'react';

import Box from '@mui/material/Box';

import nullUrl from '../../../../assets/nullUrl.jpg';
import Typography from '@mui/material/Typography';

interface IHtmlTemplate {
  url: string | null;
  id: number;
}

const HtmlTemplate: FC<IHtmlTemplate> = ({ url, id }) => {
  const imgUrl = url === null ? nullUrl : `data:image/png;base64,${url}`;
  return (
    <Box sx={{ width: '21%', maxHeight: '150px', m: 2, borderRadius: '10px' }}>
      <img
        style={{ objectFit: 'contain', height: '100%', width: '100%' }}
        alt={`How look template ${id}`}
        src={imgUrl}
      ></img>
      <Typography component={'p'}>1 presets</Typography>
    </Box>
  );
};

export default HtmlTemplate;
