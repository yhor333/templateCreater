import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

import TagInput from '../../../ui/tag-input/tag-input';

import { formDataModel } from '../models/form-data-model';

import generateSevice from '../api/generate-service';

function createFormData(tags: string[]) {
  const obj: formDataModel = {};
  tags.forEach((tag) => (obj[tag] = ''));
  return obj;
}

const tags = ['tag1', 'tag2', 'tag3'];

const Generate = () => {
  const [formData, setFormData] = useState(createFormData(tags));
  const [imgUrl, setImgUrl] = useState('');

  async function getImg() {
    try {
      await fetch('https://picsum.photos/300/400').then((response) => {
        setImgUrl(response.url);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file !== null) {
      const { name } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file[0],
      }));
    }
  };

  useEffect(() => {
    getImg();
  }, []);
  return (
    <Container sx={{ mt: 15 }}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          generateSevice.generate(formData);
        }}
      >
        <Grid container>
          <Grid item lg={8}>
            {tags.map((title, index) => (
              <TagInput
                onChange={handleInputChange}
                title={title}
                key={`${title}${index}`}
                handleButton={handleButton}
              />
            ))}
          </Grid>
          <Grid item sx={{ marginLeft: 'auto', marginRight: 'auto' }} lg={4}>
            {imgUrl ? <img src={imgUrl} alt="img-description" /> : null}
            <Button
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.dark',
                mt: 2,
                width: '300px',
                fontSize: 20,
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
              type="submit"
            >
              GENERETE
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Generate;
