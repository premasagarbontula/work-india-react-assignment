import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MovieCard from "../components/Layout/MovieCard";

const SearchedMovies = (props) => {
  const { search } = props;
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${page}`
      );
      const dataJson = await data.json();
      setSearchResults(dataJson.results);
    };
    fetchSearchResults();
  }, [search, page]);

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
    <Layout>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 mt-2 mb-4 d-flex justify-content-center align-items-center">
            <h4 className="fs-3 main-heading">Popular Movies</h4>
          </div>
          {searchResults.length > 0 &&
            searchResults.map((eachMovie) => (
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
  );
};

export default SearchedMovies;
