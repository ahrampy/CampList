import React from 'react';

const ReviewList = ({ reviews, username, newReview }) => {
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
        </div>
      ))}
    </div>
  );
}

export default ReviewList;