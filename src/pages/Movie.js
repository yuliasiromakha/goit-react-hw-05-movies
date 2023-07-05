import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
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
          setMovie(data);
          console.log(data);
        })
        .catch((error) => {
          console.log("Error fetching movie:", error);
        });
    } else {
      fetch(
        `${BASE_URL}/search/search-movies?query=${searchQuery}&api_key=${API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(data.results);
          console.log(data);
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
    navigate(`/movies?search=${searchQuery}`);
  };

  if (!movie && searchResults.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/" className="button">
        Go back
      </Link>

      <div className="movie_section">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
            height={400}
          />
        </div>

        <div className="movie_info">
          <h2>{movie?.title}</h2>
          <p>User Score: {movie?.vote_average}</p>
          <h3>Overview</h3>
          <p className="overview">{movie?.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie?.genres.map((genre) => (
              <span key={genre.id}>{genre.name}, </span>
            ))}
          </p>
        </div>
      </div>

      <div className="additional_info">
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

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
