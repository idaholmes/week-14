import React, { useState } from "react";
import { StarForm } from "../StarForm/StarForm";
import { ReviewList } from "../ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import "./Movie.css";
import { StarComponent } from "../StarForm/StarComponent";

export const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleStarReview = (number) => {
    setStars(Array.from({ length: number }, (_, index) => index));
  };

  console.log(stars);

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} className="movieImg" />
      {stars?.map((star) => (
        <StarComponent key={star} />
      ))}
      <p>{movie.synopsis}</p>
      <StarForm onStarChange={handleStarReview} />
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};
