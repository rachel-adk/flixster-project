import React, { useEffect, useState } from 'react'
import './LikedList.css'
import MovieCard from './MovieCard'

function LikedList({ likedMovies, watchedMovies, toggleLiked, toggleWatched}) {
  return (
    <>
      <div className='LikedList'>
        {likedMovies.map((movie, index) => (
          <MovieCard key={index}
            title={movie.title}
            movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average}
            movie_id={movie.id}
            isLiked={true}
            isWatched={watchedMovies.filter((m) => m.id === movie.id).length > 0}
            onToggleLiked={() => toggleLiked(movie)}
            onToggleWatched={() => toggleWatched(movie)}
          />
        ))}
      </div>

    </>
  );
}
export default LikedList;
