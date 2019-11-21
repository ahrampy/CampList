import { connect } from 'react-redux';
import { selectReviewNames } from '../../reducers/selectors';
import ReviewList from './review_list';

const mSTP = (state, ownProps) => {
  let reviews = selectReviewNames(ownProps.users, ownProps.reviews)
  
  return {
    reviews
  }
}

export default connect(mSTP)(ReviewList);