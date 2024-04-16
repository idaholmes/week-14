import React, { useState } from "react";
import { movieData } from "./movieData";
import { Movie } from "../Movie/Movie";
import "./MovieList.css";

export const MovieList = () => {
  const [movies] = useState(movieData);

  return (
    <div className="movieWrapper">
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          description={movie.description}
          imdbRating={movie.imdbRating}
          img={movie.img}
          key={movie.title}
          stars={movie.stars}
        />
      ))}
    </div>
  );
};
