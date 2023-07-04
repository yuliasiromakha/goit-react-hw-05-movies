import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "pages/Home";
import Movie from "pages/Movie";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";


const App = () => {
  return (
    <div>
      <nav className="header">
        <ul className="header-list">
          <li>
            <NavLink to="/" className="nav_place">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav_place">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            {/* <Route path="cast" element={<Cast />} /> */}
            <Route path="reviews" element={<Reviews />} />
          </Route>
      </Routes>
    </div>
  );
};

export default App;