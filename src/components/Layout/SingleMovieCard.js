import React from "react";

const SingleMovieCard = (props) => {
  const {
    title,
    poster_path,
    vote_average,
    id,
    backdrop_path,
    runtime,
    release_date,
    overview,
    genres,
  } = props.details;
  let genresNames = "";
  if (genres !== undefined) {
    for (let genre of genres) {
      genresNames += genre.name + ", ";
    }
  }

  const rating = Math.round(vote_average * 10) / 10;

  return (
    <>
      <div className="row py-1 d-flex justify-content-center align-items-center w-90">
        <div className=" bg-dark d-flex py-4">
          <div>
            <div className="d-flex">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                className="card-img-top pt-3 pb-0 px-3 w-25"
                alt={`img${id}`}
              />
              <div className="justify-content-end">
                <h5 className="card-title text-center fs-3 single-movie-title  m-3">
                  {title}
                </h5>
                <p className="rating fs-4">Rating : {rating}</p>

                <div className="d-flex px-0">
                  <p className="run-time fs-5 run-time">{runtime} min</p>
                  <p className="run-time fs-5">{genresNames}</p>
                </div>
                <p className="run-time fs-5">Release Date : {release_date}</p>
              </div>
            </div>
            <div className="text-white m-3">
              <h2 className="fs-3">Overview</h2>
              <p className="fs-5">{overview}</p>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            className="card-img-top pt-3 pb-0 px-3 w-100"
            alt={`img${id}`}
          />
        </div>
      </div>
    </>
  );
};
export default SingleMovieCard;
