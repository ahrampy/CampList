import React from "react";
import { Link } from "react-router-dom";

const ReviewsTab = props => {
  const { reviews } = props;
  if (!reviews) return null;

  return (
    <div className="review-list">
      {reviews.map((review, i) => (
        <div className="review" key={`rev-${i}`}>
          <div className="review-header">
            <div className="camp-name">
              <Link to={`/campsites/${review.site}`}>{review.name}</Link>
            </div>
            <div className="review-rating">({review.rating}/5)</div>
          </div>
          <div className="review-body">{review.body}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsTab;
