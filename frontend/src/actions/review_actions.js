import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'

const receiveReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

export const fetchReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)));