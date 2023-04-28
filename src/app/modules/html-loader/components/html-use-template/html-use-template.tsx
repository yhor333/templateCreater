import { FC, useEffect, useState } from 'react';

import HtmlTemplate from '../html-template/html-template';

import HtmlLoaderService from '../../api/html-loader-service';
import { Box, Typography } from '@mui/material';

import HtmlUseTemplateStyles from './html-use-template.styles';

interface ITemplateData {
  count: number;
  file: string;
  id: number;
  thumbnail: string;
  tags: string[];
  user_id: number;
}

const HtmlUseTemplate: FC = () => {
  const [templates, setTemplates] = useState([]);

  async function loadTemplates() {
    const data = await HtmlLoaderService.getTemplates();
    console.log(data);
    setTemplates(data);
  }

  useEffect(() => {
    loadTemplates();
  }, []);
  return (
    <Box sx={HtmlUseTemplateStyles.wrap}>
      <Typography sx={HtmlUseTemplateStyles.text}>USE TEMPLATE</Typography>
      <Box sx={HtmlUseTemplateStyles.imgWrap}>
        {templates
          ? templates.map((template: ITemplateData) => {
              return (
                <HtmlTemplate
                  url={template.thumbnail}
                  id={template.id}
                  key={template.id}
                />
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default HtmlUseTemplate;
