import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_SITE_REVIEWS = 'RECEIVE_SITE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const receiveSiteReviews = reviews => {
  return {
    type: RECEIVE_SITE_REVIEWS,
    reviews
  }
}

const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const fetchReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)));

export const fetchReview = reviewId => dispatch => APIUtil.fetchReview(reviewId)
  .then(review => dispatch(receiveReview(review)));

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));

export const fetchSiteReviews = siteId => dispatch => APIUtil.fetchSiteReviews(siteId)
  .then(reviews => dispatch(receiveSiteReviews(reviews)));

export const updateReview = review => dispatch => APIUtil.updateReview(review._id)
  .then(review => dispatch(receiveReview(review)));

export const trashReview = reviewId => dispatch => APIUtil.trashReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)));