import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';

import TagInput from '../../../ui/tag-input/tag-input';

import { formDataModel } from '../models/form-data-model';
import GenerateStyles from './generate-styles';
import GenerateModal from './generate-modal/generate-modal';

function createFormData(tags: string[]) {
  const obj: formDataModel = {};
  tags.forEach((tag) => (obj[tag] = ''));
  return obj;
}

const tags = ['tag1', 'tag2', 'tag3'];

const Generate = () => {
  const [formData, setFormData] = useState(createFormData(tags));
  const [imgUrl, setImgUrl] = useState('');
  const currentTemplateId = Number(localStorage.getItem('current_template_id'));
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    <Container sx={GenerateStyles.container}>
      <form>
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
          <Grid item sx={GenerateStyles.imgWrap} lg={4}>
            {imgUrl ? <img src={imgUrl} alt="img-description" /> : null}
            <Button sx={GenerateStyles.button} onClick={openModal}>
              Create Preset
            </Button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={GenerateStyles}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <GenerateModal
                formData={formData}
                clearIconHandler={closeModal}
              />
            </Modal>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Generate;
