import { Dispatch, SetStateAction } from 'react';

import { instance } from '../../../shared/instance/axios-instance/axios-instance';

import useTagsStore from '../../../store/tags-store';

class HtmlLodareService {
  async sendFiel(
    fiel: File,
    setTags: Dispatch<SetStateAction<any>>
  ): Promise<void> {
    try {
      instance
        .post(
          '/parse',
          { template: fiel },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          localStorage.setItem('template_id', response.data.template_id);
          useTagsStore.setState(response.data.tags);
        });
    } catch (error) {
      console.log(error);
    }
  }
}

const htmlLodareService = new HtmlLodareService();

export default htmlLodareService;
