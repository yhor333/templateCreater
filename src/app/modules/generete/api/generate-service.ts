import { instance } from '../../../shared/instance/axios-instance/axios-instance';

import { formDataModel } from '../models/form-data-model';

class GenerateSevice {
  async generate(formData: formDataModel) {
    const params = this.createParams();
    await instance.post(`/generate?${params}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  private createParams() {
    const params = new URLSearchParams();
    const templateId = localStorage.getItem('template_id');
    if (templateId !== null) {
      params.append('template_id', templateId);
    }
    return params;
  }
}

const generateSevice = new GenerateSevice();

export default generateSevice;
