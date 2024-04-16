import React from "react";
export const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews:</h3>
      <ul>
        {/* map over reviews and return an li element for each one */}
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};
