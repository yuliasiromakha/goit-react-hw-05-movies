import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import "./Movie.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";

    fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log("Error fetching movie:", error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading</div>;
  }
  console.log('movie details',location);

  return (
    <>
      <Link to={location.state && location.state.from ? location.state.from : "/"} className="button">
        Go back
      </Link>

      <div className="movie_section">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          height={400}
        />
        <div className="movie_info">
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}, </span>
            ))}
          </p>
        </div>
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

      <Outlet />
    </>
  );
};

export default MovieDetails;
