import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import MovieCard from "../components/Layout/MovieCard";
import SearchedMovies from "./SearchedMoviePage";
import SearchContext from "../context/SearchContext";

const UpcomingMovies = () => {
  const [upcoming, setUpcoming] = useState([]);
  const { search } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const fetchUpcoming = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );
    const dataJson = await data.json();
    setUpcoming(dataJson.results);
  };

  useEffect(() => {
    fetchUpcoming();
  }, [page]);
  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };
  return (
    <>
      {search.trim().length === 0 ? (
        <Layout>
          <div className="container">
            <div className="row py-5 my-5">
              <div className="col-12 mt-2 mb-4 d-flex justify-content-center align-items-center">
                <h4 className="fs-3 main-heading ">UPCOMING Movies</h4>
              </div>
              {upcoming.length > 0 &&
                upcoming.map((eachMovie) => (
                  <MovieCard details={eachMovie} key={eachMovie.id} />
                ))}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center py-2">
            <button
              className="pagination-btn px-3 py-1 m-1 text-center "
              onClick={Previous}
            >
              Previous
            </button>
            <button
              className="pagination-btn px-3 py-1 m-1 text-center btn-primary"
              onClick={Next}
            >
              Next
            </button>
          </div>
        </Layout>
      ) : (
        <SearchedMovies search={search} />
      )}
    </>
  );
};

export default UpcomingMovies;
