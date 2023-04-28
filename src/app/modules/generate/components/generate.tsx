import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';

import TagInput from '../../../ui/tag-input/tag-input';

import { formDataModel } from '../models/form-data-model';
import GenerateStyles from './generate-styles';
import GenerateModal from './generate-modal/generate-modal';
import generateService from '../api/generate-service';
import { inputsDataModel } from '../models/inputsDataModel';

function createFormData(tags: string[]) {
  const obj: formDataModel = {};
  tags.forEach((tag) => (obj[tag] = ''));
  return obj;
}

const tags = ['tag1', 'tag2', 'tag3'];

const Generate = () => {
  const [formData, setFormData] = useState(createFormData(tags));
  const [imgUrl, setImgUrl] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<inputsDataModel>({
    name: '',
    pageHeight: 146,
    count: 10,
  });

  const anonymousPreset = {
    name: `AnonymousPreset ${localStorage.getItem('current_template_id')}`,
    pageHeight: 146,
    count: 10,
  };

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

  const generateHandler = (current_preset_id: number) => {
    if (current_preset_id !== null) {
      generateService.generate(Number(current_preset_id), data);
    }
  };

  useEffect(() => {
    getImg();
  }, []);
  return (
    <Container sx={GenerateStyles.container}>
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
            Save Preset
          </Button>
          <Button
            sx={GenerateStyles.button}
            onClick={async () => {
              const currentTemplateId = localStorage.getItem(
                'current_template_id'
              );
              let currentPresetId = localStorage.getItem('current_preset_id');
              if (currentPresetId === null) {
                generateService.createTemplate(
                  Number(currentTemplateId),
                  formData,
                  anonymousPreset
                );
                currentPresetId = localStorage.getItem('current_preset_id');
                if (currentPresetId === null) return;
                generateHandler(+currentPresetId);
              }
              if (currentPresetId !== null) {
                generateHandler(+currentPresetId);
              }
            }}
          >
            GENERATE
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
              data={data}
              setData={setData}
            />
          </Modal>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Generate;
