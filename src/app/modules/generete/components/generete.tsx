import Grid from '@mui/material/Grid';

import TagInput from '../../../ui/tag-input';

const Generete = () => {
  const tags = ['1', '2', '3'];
  return (
    <Grid container>
      <Grid item>
        {tags.map((title, index) => (
          <TagInput title={title} key={`${title}${index}`} />
        ))}
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Generete;
