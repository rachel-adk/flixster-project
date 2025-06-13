import React from "react";
import "./WatchedList.css";
import MovieCard from "./MovieCard";

function WatchedList({
  likedMovies,
  watchedMovies,
  toggleLiked,
  toggleWatched,
  modalDisplay,
}) {
  return (
    <>
      <div className="WatchedList">
        <header className="header"></header>
        {likedMovies.length === 0 ? (
          <div className="no-movies-message">
            <h3>You haven't watched any movies yet😪</h3>
          </div>
        ) : (
          watchedMovies.map((movie, index) => (
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
export default WatchedList;
