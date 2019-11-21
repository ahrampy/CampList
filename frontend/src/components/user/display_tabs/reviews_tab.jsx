import React from 'react' 

const ReviewsTab = props => {
  const { reviews } = props;
  if (!reviews) return null;
  
  return(
    <ul>
      {reviews.map(review => (
        <li>
          {review.rating}
          <br/>
          {review.body}
        </li>
      ))}
    </ul>
  );
}

export default ReviewsTab