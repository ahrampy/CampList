import React from "react";
import { connect } from "react-redux";
import { fetchReview, updateReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { openModal } from "../../actions/modal";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  render() {
    const { review, formType, submitReview, openModal, authorId } = this.props;

    return (
      <ReviewForm
        review={review}
        formType={formType}
        submitReview={submitReview}
        openModal={openModal}
        authorId={authorId}
      />
    );
  }
}

const mSTP = (state, ownProps) => {
  let review;

  if (state.entities.reviews.site) {
    review = state.entities.reviews.site.find(review => {
      return review._id === ownProps.match.params.reviewId;
    });
  }

  return {
    formType: "Update Review",
    review,
    authorId: state.session.user.id
  };
};

const mDTP = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  submitReview: review => dispatch(updateReview(review)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(EditReviewForm);
