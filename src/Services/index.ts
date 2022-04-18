import axios from 'axios';
import i18next from 'i18next';

const api = axios.create({
  baseURL: 'https://sofit-mobile-challenge.herokuapp.com',
  params: {
    language: i18next.language,
  },
});

i18next.on('languageChanged', language => {
  api.defaults.params.language = language;
});

export default api;
