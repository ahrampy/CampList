import axios from 'axios';

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
};

export const createReview = review => {
  
  return axios.post(`api/reviews/new`, review)
}