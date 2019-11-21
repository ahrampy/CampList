import { connect } from 'react-redux';
import SiteReview from './site_reviews';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal';

const mSTP = (state, ownProps) => {
  let authorId
  if (state.session.isAuthenticated) {
    authorId = state.session.user.id
  }
  
  return {
    siteId: ownProps.siteId,
    authorId
  }
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(SiteReview);