import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({
  title,
  movieImage,
  rating,
  modalDisplay,
  movie_id,
  isLiked,
  hasWatched,
  onToggleLiked,
  onToggleWatched,
}) => {
  const ratingFormat = rating.toFixed(1);
  
  const clickLike = (event) => {
    event.stopPropagation();
    onToggleLiked();
  };

  const clickWatched = (event) => {
    event.stopPropagation();
    onToggleWatched();
  };

  return (
    <div className="MovieCard" onClick={() => modalDisplay(movie_id)}>
      {/* <div className="movieImage"> */}
      <img src={movieImage} alt={title} />
      {/* </div> */}
      <div className="movieInfo">
        <p className="moviecard-title">
          {title.length > 22 ? title.slice(0, 22) + "..." : title}
        </p>
        <h4>Rating: {ratingFormat}</h4>
        <div className="movieIcons">
          <p className="likeButton" onClick={clickLike}>
            {isLiked ? "❤️" : "🤍"}
          </p>

          <p className="watchedButton" onClick={clickWatched}>
            {hasWatched ? "✅" : "👀"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
