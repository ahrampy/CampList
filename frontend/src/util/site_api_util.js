import axios from 'axios';

export const getSites = () => {
  return axios.get('/api/sites');
};

export const getUserSites = id => {
  return axios.get(`/api/sites/user/${id}`);
};

export const postNewSite = data => {
  return axios.post('/api/sites/new', data);
};