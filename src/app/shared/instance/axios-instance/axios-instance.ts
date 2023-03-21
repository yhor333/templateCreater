import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://185.235.218.150:8050/',
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  config.headers['Access-Control-Allow-Origin'] = '*';

  return config;
});
