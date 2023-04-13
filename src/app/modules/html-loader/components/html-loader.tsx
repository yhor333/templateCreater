import Container from '@mui/material/Container';
import HtmlLoaderInput from './html-loader-input/html-loader-input';
import HtmlLoaderStyles from './html-loader-styles';

const HtmlLoader = () => {
  return (
    <Container sx={HtmlLoaderStyles.container}>
      <HtmlLoaderInput />
    </Container>
  );
};

export default HtmlLoader;
