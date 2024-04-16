import React from "react";
import "./Movie.css";
import { StarComponent } from "../Stars/Star";

export const Movie = (props) => {
  const starCount = (number) => {
    return Array.from({ length: number }, (_, index) => index + 1);
  };

  return (
    <div className="movie">
      <h2>{props.title}</h2>
      <img src={props.img} alt="" className="movieImg" />
      <p>{props.description}</p>
      <p>
        IMDB rating: <span>{props.imdbRating}</span>
      </p>
      {starCount(props?.stars).map((star) => (
        <StarComponent key={star} />
      ))}
    </div>
  );
};
