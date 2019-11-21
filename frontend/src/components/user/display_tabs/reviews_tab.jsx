import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsTab = props => {
  const { reviews } = props;
  if (!reviews) return null;
  
  return(
    <div>
      {reviews.map(review => (
        <div>
          <Link to={`/campsites/${review.site}`}>{review.name}</Link>
          <br/>
          {review.rating}
          <br/>
          {review.body}
          <br/>
        </div>
      ))}
    </div>
  );
}

export default ReviewsTab