import { connect } from 'react-redux';
import SiteReview from './site_reviews';
import { createReview, fetchSiteReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal';

const mSTP = (state, ownProps) => {
  let { users, reviews } = state.entities;
  let authorId
  if (state.session.isAuthenticated) {
    authorId = state.session.user.id
  }

  return {
    siteId: ownProps.siteId,
    authorId,
    users: Object.values(users)
  }
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  openModal: modal => dispatch(openModal(modal)),
  fetchSiteReviews: siteId => dispatch(fetchSiteReviews(siteId)),
  fetchUsers: () => dispatch(fetchUsers())

})

export default connect(mSTP, mDTP)(SiteReview);