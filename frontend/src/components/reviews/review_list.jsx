import React from "react";
import { Link } from "react-router-dom";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleDelete(id) {
    this.props.trashReview(id);
  }

  handleUpvote(e) {
    e.preventDefault();

    const id = e.target.value;
    const data = { id, user: this.props.currentUserId };

    let ans = this.props.reviews.filter(review => {
      return review._id === id;
    });

    if (ans[0].downvotes.includes(this.props.currentUserId)) {
      this.props.addUpvote(data) && this.props.removeDownvote(data);
    } else if (ans[0].upvotes.includes(this.props.currentUserId)) {
      this.props.removeUpvote(data);
    } else {
      this.props.addUpvote(data);
    }
  }

  handleDownvote(e) {
    e.preventDefault();

    const id = e.target.value;
    let data = { id: e.target.value, user: this.props.currentUserId };

    let ans = this.props.reviews.filter(review => {
      return review._id === id;
    });

    if (ans[0].upvotes.includes(this.props.currentUserId)) {
      this.props.addDownvote(data) && this.props.removeUpvote(data);
    } else if (ans[0].downvotes.includes(this.props.currentUserId)) {
      this.props.removeDownvote(data);
    } else {
      return this.props.addDownvote(data);
    }
  }

  render() {
    const { currentUserId, siteId, reviews } = this.props;

    const uparrow = "▲";
    const downarrow = "▼";

    return (
      <div className="review-list-container">
        <p className="review-label">Recent Reviews</p>
        {reviews.map((review, i) => (
          <div key={`key-${i}`} className="single-review-container">
            <div className="review-votes">
              <div className="review-score">
                <div className="positive">[+{review.upvotes.length}]</div>
                <div className="negative">[-{review.downvotes.length}]</div>
              </div>
              <div className="upvote">
                <button
                  className="btn"
                  value={review._id}
                  onClick={this.handleUpvote}
                >
                  {uparrow}
                </button>
              </div>
              <div className="downvote">
                <button
                  className="btn"
                  value={review._id}
                  onClick={this.handleDownvote}
                >
                  {downarrow}
                </button>
              </div>
            </div>
            <div className="review-body">
              <div className="review-content">
                <div className="username-rating" value="hi">
                  <div>
                    {review.username} ({review.rating}/5)
                  </div>
                </div>
                {review.body}
              </div>
              <div className="review-options">
                {currentUserId === review.author ? (
                  <div>
                    <button onClick={() => this.handleDelete(review._id)}>
                      Delete
                    </button>
                    <Link to={`/reviews/${review._id}/edit`}>Edit</Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;
