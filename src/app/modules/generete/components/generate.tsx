import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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

  return (
    <Container sx={{ mt: 15 }}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          generateSevice.generate(formData);
        }}
      >
        <Grid container>
          <Grid item md={8}>
            {tags.map((title, index) => (
              <TagInput
                onChange={handleInputChange}
                title={title}
                key={`${title}${index}`}
                handleButton={handleButton}
              />
            ))}
          </Grid>
          <Grid item>
            <Button type="submit">GENERETE</Button>
          </Grid>
        </Grid>
      </form>
      <TextareaAutosize />
    </Container>
  );
};

export default Generate;
