import React from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  const movie = useLocation().state;
  console.log(movie);
  return (
    <div className="details">
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <h1 style={{ textAlign: "center", margin: "10px" }}>{movie.name}</h1>
        <h3>{movie.description}</h3>
      </div>
    </div>
  );
}

export default MovieDetails;
