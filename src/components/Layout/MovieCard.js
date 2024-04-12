import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { title, poster_path, vote_average, id } = props.details;
  const rating = Math.round(vote_average * 10) / 10;

  return (
    <>
      <div className="card bg-dark col-md-3 col-sm-4 align-items-center m-0">
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="card-img-top pt-4 pb-0 px-2"
            alt={`img${id}`}
          />
          <h5 className="card-title text-center fs-5 movie-name">{title}</h5>
        </Link>
        <p className="text-white">Rating : {rating}</p>
      </div>
    </>
  );
};

export default MovieCard;
