import React from "react";
import "./LikedList.css";
import MovieCard from "./MovieCard";

function LikedList({
  likedMovies,
  watchedMovies,
  toggleLiked,
  toggleWatched,
  modalDisplay,
}) {
  return (
    <>
      <div className="likedList">
        <header className="header"></header>
        {likedMovies.length === 0 ? (
          <div className="no-movies-message">
            <h3>You haven't liked any movies yet😕</h3>
            <h3>
              Go to the home page and click the heart icon on movies you enjoy!
            </h3>
          </div>
        ) : (
          likedMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
              movie_id={movie.id}
              modalDisplay={modalDisplay}
              isLiked={true}
              hasWatched={
                watchedMovies && watchedMovies.some((m) => m.id === movie.id)
              }
              onToggleLiked={() => toggleLiked(movie)}
              onToggleWatched={() => toggleWatched(movie)}
            />
          ))
        )}
      </div>
    </>
  );
}
export default LikedList;
