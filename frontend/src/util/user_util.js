import axios from 'axios';

const getUser = userId => {
  return axios.get(`/api/users/${id}`);
};