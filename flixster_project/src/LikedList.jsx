import React, { useEffect, useState } from 'react'
import './LikedList.css'
import MovieCard from './MovieCard'

function LikedList({ likedMovies }) {
  return (
    <>
      <div className='MovieList'>
        {likedMovies.map((movie, index) => (
          <MovieCard key={index}
            title={movie.title}
            movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average}
            movie_id={movie.id}
            isLiked={true}
            isWatched={watchedMovies.filter((m) => m.id === movie.id).length > 0}
            onToggleLiked={() => onToggleLiked(movie)}
            onToggleWatched={() => onToggleWatched(movie)}
          />
        ))}
      </div>

    </>
  );
}
export default LikedList;
