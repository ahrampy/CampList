import { connect } from 'react-redux';
import SiteReview from './site_reviews';

const mSTP = (state, ownProps) => {

  
  return {
    siteId: ownProps.siteId,
    authorId: ownProps.authorId
  }
}

export default connect(mSTP)(SiteReview);