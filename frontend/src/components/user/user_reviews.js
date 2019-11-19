import React from 'react';

const UserReviews = ({ reviews }) => (
  <div>
    {reviews.map(review => (
      <ul>
        <li>{review.rating}</li>
        <br/>
        <li>{review.body}</li>
      </ul>
    ))}
  </div>
)

export default UserReviews;