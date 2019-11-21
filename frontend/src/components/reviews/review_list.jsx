import React from 'react';

const ReviewList = ({ reviews }) => {
  if (!reviews) return null;
  return (
    <div>
      <p className="review-label">Recent Reviews</p>
      {reviews.map(review => (
        <div>
          {review.username}
          <br/>
          {review.rating}
          <br/>
          {review.body}
        </div>
      ))}
    </div>
  )
}

export default ReviewList;