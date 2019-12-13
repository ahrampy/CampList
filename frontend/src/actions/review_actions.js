import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_SITE_REVIEWS = 'RECEIVE_SITE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

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

const receiveUpdatedReview = review => ({
  type: UPDATE_REVIEW,
  review
})

export const fetchReviews = () => dispatch => APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)));

export const fetchReview = reviewId => dispatch => APIUtil.fetchReview(reviewId)
  .then(review => dispatch(receiveReview(review)));

export const createReview = review => dispatch => APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)));

export const fetchSiteReviews = siteId => dispatch => APIUtil.fetchSiteReviews(siteId)
  .then(reviews => dispatch(receiveSiteReviews(reviews)));

export const updateReview = review => dispatch => APIUtil.updateReview(review)
  .then(review => 
      {
      return dispatch(receiveUpdatedReview(review))
  })  

export const trashReview = reviewId => dispatch => APIUtil.trashReview(reviewId)
  .then(() => dispatch(removeReview(reviewId)));



export const addUpvote = data => dispatch => APIUtil.addUpvote(data)
  .then(review => 
    {
    
    return dispatch(receiveUpdatedReview(review))
  })

export const addDownvote = data => dispatch => APIUtil.addDownvote(data)
  .then(review => 
    {
    return dispatch(receiveUpdatedReview(review))
  })

export const removeDownvote = data => dispatch => APIUtil.removeDownvote(data)
  .then(review => 
    {
    debugger
    return dispatch(receiveUpdatedReview(review))
  })

export const removeUpvote = data => dispatch => APIUtil.removeUpvote(data)
  .then(review => {
    debugger
    return dispatch(receiveUpdatedReview(review))
  })