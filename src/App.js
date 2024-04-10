import { Routes, Route } from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import TopratedMovies from "./pages/TopratedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import Pagenotfound from "./pages/PageNotFound";
import SingleMovieDetailPage from "./pages/SingleMovieDetailPage";
import SearchContext from "./context/SearchContext";
import { useContext } from "react";

function App() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/toprated-movies" element={<TopratedMovies />} />
          <Route path="/upcoming-movies" element={<UpcomingMovies />} />
          <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
