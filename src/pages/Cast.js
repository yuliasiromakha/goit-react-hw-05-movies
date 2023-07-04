import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";

    fetch(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setCast(data.cast);
        console.log("Cast:", data.cast);
      })
      .catch((error) => {
        console.log("Error fetching cast:", error);
      });
  }, [movieId]);

  if (cast.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              height={300}
            />
            <p>
              <strong>{actor.name}</strong> as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;