import { RECEIVE_ALL_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews.data)
    default:
      return state;
  }
}

export default ReviewsReducer;