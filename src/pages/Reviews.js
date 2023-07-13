import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const API_KEY = "84c9ab04e100be4662cee8d4849b6920";
    const BASE_URL = "https://api.themoviedb.org";

    fetch(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data.results);
        // console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching reviews:", error);
      });
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>No reviews found.</div>;
  }

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>Author:</strong> {review.author}
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

