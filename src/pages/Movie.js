import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import './Movie.css'

const Movie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";

    if (searchQuery === "") {
      fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults([]);
        })
        .catch((error) => {
          console.log("Error fetching movie:", error);
        });
    } else {
      fetch(
        `${BASE_URL}/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.log("Error fetching search results:", error);
        });
    }
  }, [movieId, searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (location.pathname.includes("/movies/")) {
      // Stay on the Movie page and update search query
      setSearchQuery(location.search.replace("?search=", ""));
    } else {
      // Navigate to the Movie page with search query
      navigate(`/movies?search=${searchQuery}`);
    }
  };

  if (movieId && searchResults.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {movieId && (
        <>
          <Link to="/" className="button">
            Go back
          </Link>
          <div className="movie_section">
            {/* Render movie details based on movieId */}
          </div>

          <div className="additional_info">
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <div className="search_section">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 && (
        <div className="search_results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/movies/${result.id}`}>{result.title}</Link>
              </li>
            ))}
          </ul>
       </div>
      )}

      <Outlet />
    </>
  );
};

export default Movie;

