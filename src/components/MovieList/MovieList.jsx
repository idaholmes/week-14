import React from "react";
import { movieData } from "./movieData";
import { Movie } from "../Movie/Movie";
import "./MovieList.css";
export const MovieList = () => {
  return (
    <div className="movie-list">
      {/* map over all of the movie objects in the movieData array and return a Movie component for each one */}
      {movieData.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};
