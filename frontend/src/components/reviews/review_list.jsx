import React from 'react';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.trashReview(id)
  }

  render() {
    let { reviews, currentUserId, siteId } = this.props

    if (!reviews) return null;
    debugger
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
              <div>
                <button onClick={() => this.handleDelete(review._id)}>Delete</button> 
                <Link to={`/reviews/${review._id}/edit`}>Edit</Link>
              </div>
              :
              null
            }
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;