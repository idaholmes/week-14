import React, { useState } from "react";

export const StarForm = ({ onStarChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onStarChange(rating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={handleRatingChange}>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
