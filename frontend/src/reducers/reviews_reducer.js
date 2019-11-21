import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RECEIVE_SITE_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state = { all: {}, site: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_ALL_REVIEWS:
      newState.all = action.reviews.data
      return newState

    case RECEIVE_REVIEW:
      newState.new = action.review.data
      return newState;

    case RECEIVE_SITE_REVIEWS:
      newState.site = action.reviews.data
      return newState;
      
    default:
      return state;
  }
}

export default ReviewsReducer;