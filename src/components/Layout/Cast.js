import React from "react";

const Cast = (props) => {
  const { name, character, profile_path, id } = props.details;

  return (
    <>
      <div className="card bg-white col-md-3 col-sm-4 align-items-center">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            className="card-img-top pt-3 pb-0 px-3"
            alt={`img${id}`}
          />
          <p className="card-title text-center fs-5">{name}</p>
          <p>Character : {character}</p>
        </div>
      </div>
    </>
  );
};

export default Cast;
