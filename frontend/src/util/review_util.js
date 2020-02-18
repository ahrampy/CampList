import axios from "axios";

export const fetchReviews = () => {
  return axios.get(`/api/reviews`);
};

export const fetchReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`);
};

export const createReview = review => {
  return axios.post(`/api/reviews/new`, review);
};

export const fetchSiteReviews = siteId => {
  return axios.get(`/api/reviews/site/${siteId}`);
};

export const trashReview = reviewId => {
  return axios.delete(`/api/reviews/${reviewId}`);
};

export const updateReview = review => {
  return axios.put(`/api/reviews/${review.id}`, review);
};

export const addUpvote = data => {
  return axios.put(`/api/reviews/upvote/${data.id}`, data);
};

export const addDownvote = data => {
  return axios.put(`/api/reviews/downvote/${data.id}`, data);
};

export const removeDownvote = data => {
  return axios.put(`/api/reviews/removeDownvote/${data.id}`, data);
};

export const removeUpvote = data => {
  return axios.put(`/api/reviews/removeUpvote/${data.id}`, data);
};
