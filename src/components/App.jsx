import React, { lazy, Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("pages/Home"));
const Movie = lazy(() => import("pages/Movie"));
const Cast = lazy(() => import("pages/Cast"));
const Reviews = lazy(() => import("pages/Reviews"));

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Home />}>
            <Route path="/movies/" element={<Movie />}>
              <Route path=":movieId" element={<Movie />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>

        </Routes>
      </Suspense>


{ /* КОД ЯКИЙ ПРАЦЮЄ */
/* <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:movieId" element={<Movie />} />
    <Route path="/movies/:movieId/cast" element={<Cast />} />
    <Route path="/movies/:movieId/reviews" element={<Reviews />} />
  </Routes>
</Suspense> */}

    </div>
  );
};

export default App;


