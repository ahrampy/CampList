import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.trashReview(id)
  }

  render() {
    let { reviews, currentUserId } = this.props
    if (!reviews) return null;
    return (
      <div className="review-list-container">
        <p className="review-label">Recent Reviews</p>
        {reviews.map((review, i) => (
          <div key={`key-${i}`} className="single-review-container">
            <div className="username-rating">
              <div>
                {review.username}
              </div>
              <div>
                {review.rating}
              </div>
            </div>
            <div className="review-body">
              {review.body}
            </div>
            <div>
              {
                currentUserId === review.author ?
                <button onClick={() => this.handleDelete(review._id)}>Delete</button> :
                null
              }
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;