import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext";

const Header = () => {
  const { search, setSearch } = useContext(SearchContext);

  const Trigger = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MovieDb
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/toprated-movies" className="nav-link">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/upcoming-movies" className="nav-link">
                  Upcoming
                </NavLink>
              </li>
            </ul>

            <form className="d-flex ml-3" role="search">
              <input
                className="form-control me-2 ms-4 "
                type="search"
                placeholder="Movie Name"
                onChange={Trigger}
                value={search}
              />
              <button
                className="btn btn-outline-success search-btn"
                type="submit"
                onClick={onSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
