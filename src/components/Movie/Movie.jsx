import React, { useState } from "react";
import { StarForm } from "../StarForm/StarForm";
import { ReviewList } from "../ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import "./Movie.css";
import { StarComponent } from "../StarForm/StarComponent";

export const Movie = ({ movie }) => {
  // set reviews and stars to an empty array on component load
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState([]);

  // mutate the reviews array and update the value with the new review
  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleStarReview = (number) => {
    // when a star value is submitted, convert that number to an array with that many indexes so we can map over it later
    setStars(Array.from({ length: number }, (_, index) => index));
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} className="movieImg" />
      {/* map over stars length and return the star component that many times, to show 1, 2, 3, 4 stars etc */}
      {stars?.map((star) => (
        <StarComponent key={star} />
      ))}
      <p>IMDB rating: {movie.imdbRating}</p>
      {/* tie the onStarChange prop to the logic in the handler of the parent component */}
      <StarForm onStarChange={handleStarReview} />
      {/* pass down reviews to child component */}
      <ReviewList reviews={reviews} />
      {/* tie the onAddReview prop to the logic in the handler of the parent component */}
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};
