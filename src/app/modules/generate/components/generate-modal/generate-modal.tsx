import { Dispatch, FC, MouseEventHandler, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import GenerateModalStyles from './generate-modal-styles';
import generateService from '../../api/generate-service';
import { formDataModel } from '../../models/form-data-model';
import { inputsDataModel } from '../../models/inputsDataModel';

const schema = yup
  .object({
    name: yup.string().required('The field must be filled'),
    pageHeight: yup
      .number()
      .positive('The field must be positive')
      .required('The number must be filled and positive'),
  })
  .required();

type PresetFormData = yup.InferType<typeof schema>;

interface IGenerateModal {
  clearIconHandler: MouseEventHandler<SVGSVGElement>;
  formData: formDataModel;
  data: inputsDataModel;
  setData: Dispatch<inputsDataModel>;
}
const GenerateModal: FC<IGenerateModal> = ({
  clearIconHandler,
  formData,
  data,
  setData,
}) => {
  const [isGenerateReady, setIsGenerateReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PresetFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {};

  useEffect(() => {
    if (data.name && data.pageHeight && data.count) {
      setIsGenerateReady(true);
    }
    if (!data.name || !data.pageHeight || !data.count) {
      setIsGenerateReady(false);
    }
  }, [data.count, data.name, data.pageHeight]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={GenerateModalStyles.wrap}>
        <ClearIcon
          onClick={clearIconHandler}
          sx={GenerateModalStyles.clearIcon}
        />
        <TextField
          sx={GenerateModalStyles.textField}
          id="filled-name"
          label={errors.name ? 'The field must be filled' : 'Name'}
          variant="filled"
          error={Boolean(errors.name)}
          {...register('name')}
          onChange={(event) => setData({ ...data, name: event.target.value })}
        />
        <TextField
          sx={GenerateModalStyles.textField}
          id="filled-page-height"
          label={
            errors.pageHeight
              ? 'The number must be filled and positive'
              : 'Page height'
          }
          variant="filled"
          defaultValue={146}
          error={Boolean(errors.pageHeight)}
          {...register('pageHeight')}
          type="number"
          onChange={(event) =>
            setData({ ...data, pageHeight: +event.target.value })
          }
        />
        <TextField
          sx={GenerateModalStyles.textField}
          id="filled-count"
          label={
            !Boolean(data.count)
              ? 'The number must be filled and positive'
              : 'Count'
          }
          variant="filled"
          error={!Boolean(data.count)}
          name="count"
          type="number"
          defaultValue={10}
          onChange={(event: any) => {
            setData({
              ...data,
              count: +event.target.value,
            });
          }}
        />
        <Box>
          <Button
            type="submit"
            onClick={() => {
              const currentTemplateId = localStorage.getItem(
                'current_template_id'
              );
              if (currentTemplateId !== null) {
                generateService.createTemplate(
                  Number(currentTemplateId),
                  formData,
                  data
                );
              }
            }}
            sx={GenerateModalStyles.button}
          >
            Save preset
          </Button>
          {/* <Button
            type="submit"
            disabled={!isGenerateReady}
            onClick={async () => {
              const currentTemplateId = localStorage.getItem(
                'current_template_id'
              );
              const currentPresetId = localStorage.getItem('current_preset_id');
              if (currentPresetId === undefined) {
                const current_preset_id = await generateService.createTemplate(
                  Number(currentTemplateId),
                  formData,
                  data
                );
                if (current_preset_id === null) {
                  generateHandler(current_preset_id);
                }
              }
            }}
            sx={GenerateModalStyles.button}
          >
            Generate
          </Button> */}
        </Box>
      </Box>
    </form>
  );
};

export default GenerateModal;
