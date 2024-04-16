import React from "react";
import { movieData } from "./movieData";
import { Movie } from "../Movie/Movie";
import "./MovieList.css";
export const MovieList = () => {
  return (
    <div className="movie-list">
      {movieData.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};
