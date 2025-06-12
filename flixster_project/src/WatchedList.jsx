import React, { useEffect, useState } from 'react'
import './WatchedList.css'
import MovieCard from './MovieCard'

function WatchedList({ watchedMovies }) {
  return (
    <>
      <div className='MovieList'>
        {watchedMovies.map((movie, index) =>
          <MovieCard key={index}
            title={movie.title}
            movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average}
            movie_id={movie.id}
            />
        )}
      </div>

    </>
  )
}
export default WatchedList;
