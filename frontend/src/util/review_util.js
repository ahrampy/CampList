import axios from 'axios';

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
};

export const createReview = review => {
  debugger
  return axios.post(`api/reviews/new`, review)
}

export const fetchSiteReviews = siteId => {
  return axios.get(`/api/reviews/site/${siteId}`)
};

export const trashReview = reviewId => {
  debugger
  return axios.delete(`api/reviews/${reviewId}`)
}