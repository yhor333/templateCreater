import { instance } from '../../../shared/instance/axios-instance/axios-instance';

import useTagsStore from '../../../store/tags-store';

class htmlLoaderService {
  async sendFile(file: File): Promise<void> {
    instance
      .post(
        '/template',
        { template: file },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem('current_template_id', response.data.id);
        useTagsStore.setState(response.data.tags);
      });
  }
  async getTemplates() {
    return instance.get('/template/').then((response) => response.data);
  }
}

const HtmlLoaderService = new htmlLoaderService();

export default HtmlLoaderService;
