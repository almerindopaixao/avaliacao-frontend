import axios from 'axios';
import { BASE_URL } from '../config/urls';

const api = axios.create({
  baseURL: BASE_URL,
});

api.defaults.headers.common['x-requested-with'] = 'origin';

export { api };
