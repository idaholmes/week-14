import React, { useState } from "react";
import "./ReviewForm.css";

export const ReviewForm = ({ onAddReview }) => {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    // onChange, set the value of what we will pass up to the parent on submit
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass form value up to the parent via the onAddReview prop
    onAddReview(review);
    // clear form after submission
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
