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
      <div>
        <p className="review-label">Recent Reviews</p>
        {reviews.map((review, i) => (
          <div key={`key-${i}`}>
            {review.username}
            <br/>
            {review.rating}
            <br/>
            {review.body}
            <br/>
            {
              currentUserId === review.author ?
              <button onClick={() => this.handleDelete(review._id)}>Delete</button> :
              null
            }
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;