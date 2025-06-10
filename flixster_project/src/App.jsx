import React, { useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import data from './data'

const fetchData = async () => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://www.themoviedb.org/settings/api`);
    if (!response.ok) {
      throw new Error('Failed to fetch data for movie');
    }
    const data = await response.json();
    //fetchData(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (movie) {
    fetchData();
  }
}, [movie]);

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
