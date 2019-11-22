import { connect } from 'react-redux';
import { trashReview } from '../../actions/review_actions';
import { selectReviewNames } from '../../reducers/selectors';
import ReviewList from './review_list';

const mSTP = (state, ownProps) => {
  // if (ownProps.newReview) {
  //   ownProps.reviews.push(ownProps.newReview)
  // }
  let currentUserId;
  if (state.session.isAuthenticated) {
    currentUserId = state.session.user.id
  }
  let reviews = selectReviewNames(ownProps.users, ownProps.reviews)
  
  return {
    reviews,
    currentUserId: currentUserId || 0
  }
}

const mDTP = dispatch => ({
  trashReview:(reviewId) => dispatch(trashReview(reviewId)) 
})

export default connect(mSTP, mDTP)(ReviewList);