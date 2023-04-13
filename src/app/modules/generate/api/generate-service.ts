import { instance } from '../../../shared/instance/axios-instance/axios-instance';

import { formDataModel } from '../models/form-data-model';

class GenerateService {
  // async generate(formData: formDataModel) {
  //   const params = this.createParams();
  //   await instance.post(`/generate?${params}`, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // }
  async createTemplate(template_id: number, formData: formDataModel) {
    await instance
      .post(`/template/${template_id}/presets`, formData)
      .then((response) =>
        localStorage.setItem('current_preset_id', response.data.id)
      );
  }

  async generate(presetId: number) {
    const params = this.createParams();
    await instance.post(`/${presetId}/generate?${params}`);
  }
  private createParams() {
    const params = new URLSearchParams();
    const count = '1';
    if (count !== null) {
      params.append('count', count);
    }
    return params;
  }
}

const generateService = new GenerateService();

export default generateService;
