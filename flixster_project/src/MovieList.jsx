import React from 'react'
import './movieList.css'
//import movieCard from './MovieCard'

const movieList= ({ title, rating, image }) => {
  return (
    <>
      <div className='movieApp'>
        <h2>Now Playing</h2>
        <div className='movieList' key>

        </div>

      </div>
    </>
  );
}

export default App
