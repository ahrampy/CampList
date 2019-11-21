import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RECEIVE_SITE_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews.data)
    case RECEIVE_REVIEW:
      return Object.assign({}, state, action.review.data)
    case RECEIVE_SITE_REVIEWS:
      return Object.assign({}, state, action.reviews.data)
    default:
      return state;
  }
}

export default ReviewsReducer;