import Container from '@mui/material/Container';
import HtmlLoaderInput from './html-loader-input/html-loader-input';
import HtmlLoaderStyles from './html-loader-styles';
import HtmlUseTemplate from './html-use-template/html-use-template';

const HtmlLoader = () => {
  return (
    <Container sx={HtmlLoaderStyles.container}>
      <HtmlLoaderInput />
      <HtmlUseTemplate />
    </Container>
  );
};

export default HtmlLoader;
