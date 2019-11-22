import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    debugger
    this.props.fetchReview(this.props.match.params.reviewId)
  }
    
  render() {
    const { review, formType, submitReview } = this.props;
    debugger
    if (!review) return null;

    return (
      <ReviewForm
        review={review}
        formType={formType}
        submitReview={submitReview}
      />
    );
  }
}



const mSTP = (state, ownProps) => {
  debugger
  return {
    formType: 'Update Review',
    review: state.entities.reviews.site[ownProps.match.params.reviewId]
  }
}

const mDTP = dispatch => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  submitReview: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(EditReviewForm);