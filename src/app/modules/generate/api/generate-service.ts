import { instance } from '../../../shared/instance/axios-instance/axios-instance';

import { formDataModel } from '../models/form-data-model';
import { inputsDataModel } from '../models/inputsDataModel';

class GenerateService {
  async createTemplate(
    template_id: number,
    formData: formDataModel,
    data: inputsDataModel
  ) {
    const params = this.createParams({
      name: data.name,
      page_height: data.pageHeight,
    });
    return instance
      .post(`/template/${template_id}/presets?${params}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        localStorage.setItem('current_preset_id', response.data.id);
        return response.data.id;
      });
  }

  async generate(presetId: number, data: inputsDataModel) {
    const params = this.createParams({ count: data.count });
    await instance.post(`/${presetId}/generate?${params}`);
  }
  private createParams(data: any) {
    const params = new URLSearchParams();
    if (data !== null) {
      for (const query in data) {
        params.append(query, data[query]);
      }
    }
    return params;
  }
}

const generateService = new GenerateService();

export default generateService;
