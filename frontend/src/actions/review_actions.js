import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_SITE_REVIEWS = 'RECEIVE_SITE_REVIEWS';

const receiveReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveSiteReviews = reviews => {
  debugger
  return {
    type: RECEIVE_SITE_REVIEWS,
    reviews
  }
}

export const fetchReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)));

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));

export const fetchSiteReviews = siteId => dispatch => APIUtil.fetchSiteReviews(siteId)
  .then(reviews => dispatch(receiveSiteReviews(reviews)));