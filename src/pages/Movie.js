import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useSearchParams, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, [searchParams]);

  const fetchSearchResults = (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";

    fetch(`${BASE_URL}/3/search/movie?query=${query}&api_key=${API_KEY}`)
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
        return <p>Sorry, there was an error while fetching the movie</p>;
      });
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    setSearchParams({ query: searchQuery });
    fetchSearchResults(searchQuery);
  };

  return (
    <>
      <form className="search_section" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div className="search_results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link
                  to={`/movies/${result.id}`}
                  state={{ from: location, searchQuery }}
                >
                  {result.title}
                </Link>
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
