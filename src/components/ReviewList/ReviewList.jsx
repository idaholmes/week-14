import React from "react";
export const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};
