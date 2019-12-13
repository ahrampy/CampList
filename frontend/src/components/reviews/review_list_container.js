import { connect } from 'react-redux';
import { trashReview, addUpvote, addDownvote, removeDownvote, removeUpvote } from '../../actions/review_actions';
import { fetchSiteReviews } from '../../actions/review_actions'
import { selectReviewNames } from '../../reducers/selectors';
import ReviewList from './review_list';

const mSTP = (state, ownProps) => {
  let currentUserId;
  if (state.session.isAuthenticated) {
    currentUserId = state.session.user.id
  }
  let reviews = selectReviewNames(ownProps.users, ownProps.reviews)
  return {
    reviews,
    siteId: ownProps.siteId,
    currentUserId: currentUserId || 0
  }
}

const mDTP = dispatch => ({
  trashReview:(reviewId) => dispatch(trashReview(reviewId)),
  addUpvote:(data) => dispatch(addUpvote(data)),
  addDownvote:(data) => dispatch(addDownvote(data)),
  removeDownvote:(data) => dispatch(removeDownvote(data)),
  removeUpvote:(data) => dispatch(removeUpvote(data)),
  fetchSiteReviews:(id) => dispatch(fetchSiteReviews(id ))
})

export default connect(mSTP, mDTP)(ReviewList);