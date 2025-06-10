import React from 'react'
import './App.css'
// import ModalDisplay from './ModalDisplay'

const App = () => {
  return (
    <>
      <div className='movieApp'>
        <h1>Flixster</h1>
        <MovieList data = {data}/>
      </div>
    </>
  );
}

export default App
