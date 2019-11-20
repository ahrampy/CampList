import axios from 'axios';

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
};