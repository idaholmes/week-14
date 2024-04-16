import React, { useState } from "react";
import "./ReviewForm.css";

export const ReviewForm = ({ onAddReview }) => {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddReview(review);
    setReview("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Leave a review:</label>
        <textarea value={review} onChange={handleReviewChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
