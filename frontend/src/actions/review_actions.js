import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const fetchReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)));

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)))