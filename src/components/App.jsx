// import React, { lazy, Suspense } from "react";
// import { Route, Routes, NavLink } from "react-router-dom";
// import "./App.css";

// const Home = lazy(() => import("pages/Home"));
// const Movie = lazy(() => import("pages/Movie"));
// const Cast = lazy(() => import("pages/Cast"));
// const Reviews = lazy(() => import("pages/Reviews"));
// const NotFound = lazy(() => import("pages/NotFound"));
// const MovieDetails = lazy(() => import("pages/MovieDetails"));

// const App = () => {
//   return (
//     <div>
//       <nav className="header">
//         <ul className="header-list">
//           <li>
//             <NavLink to="/" className="nav_place">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/movies" className="nav_place">
//               Movies
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies/*" element={<Movie />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default App;


import React, { lazy, Suspense, useRef } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("pages/Home"));
const Movie = lazy(() => import("pages/Movie"));
const Cast = lazy(() => import("pages/Cast"));
const Reviews = lazy(() => import("pages/Reviews"));
const NotFound = lazy(() => import("pages/NotFound"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));

const App = () => {
  const location = useLocation();
  const previousLocation = useRef(null);

  if (!location.pathname.startsWith("/movies")) {
    previousLocation.current = location.pathname;
  }

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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
