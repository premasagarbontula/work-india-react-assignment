import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import SingleMovieCard from "../components/Layout/SingleMovieCard";
import Cast from "../components/Layout/Cast";

const SingleMovieDetailPage = () => {
  const [movieDetail, setMovieCastData] = useState({
    movieDetailData: {},
    castData: {},
  });
  const { id } = useParams();
  const fetchMovieDetail = async () => {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const castResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data1 = await movieResponse.json();
    const data2 = await castResponse.json();
    setMovieCastData({ movieDetailData: data1, castData: data2.cast });
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  const { movieDetailData, castData } = movieDetail;
  return (
    <Layout>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 mt-2 mb-4  d-flex justify-content-center align-items-center">
            <h4 className="fs-3 main-heading ">Movie Details</h4>
          </div>
          <SingleMovieCard details={movieDetailData} />
          {castData.length > 0 &&
            castData.map((castDetails) => (
              <Cast details={castDetails} key={castDetails.id} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovieDetailPage;
