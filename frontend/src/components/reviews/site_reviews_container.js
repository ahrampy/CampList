import { connect } from 'react-redux';
import SiteReview from './site_reviews';
import { createReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {

  
  return {
    siteId: ownProps.siteId,
    authorId: ownProps.authorId
  }
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(SiteReview);