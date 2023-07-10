import React, { useState } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import './Movie.css'

const Movie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [movie, setMovie] = useState(null);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    }
  };
  

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
  
    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";
  
    fetch(`${BASE_URL}/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data.results);
        if (data.results.length === 0) {
          alert("Sorry, no movie was found");
        }
      })
      .catch((error) => {
        console.log("Error fetching search results:", error);
      });
  };
  
  return (
    <>
      {movieId && (
        <>
          <Link to="/" className="button">
            Go back
          </Link>

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
