import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal';

const mSTP = (state, ownProps) => {

  let authorId
  if (state.session.isAuthenticated) {
    authorId = state.session.user.id
  }

  return {
    review: {
      site: ownProps.siteId,
      rating: '5',
      body: '',
      author: authorId
    },
    formType: 'Submit a Review',
    authorId
  }
}

const mDTP = dispatch => ({
  submitReview: review => dispatch(createReview(review)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ReviewForm)


