import React, { useEffect, useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchForm from './SearchForm'
//import data from './data'




function App() {
  const [movie, setMovies] = useState([1])
  const [movieData, setMovieData] = useState(null);

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    const data = await response.json()
    setMovieData(movieData)
  };

  useEffect(() => {
    if (movie !== '') {
      fetchData();
    }
  }, [movie]);

  const handleMovieChange = (newMovie) => {
    setMovies(newMovie);
  };
  return (
    <div className="App">
      <h1>Flixster</h1>
      <SearchForm onMovieChange={handleMovieChange}/>
      <MovieList />
    </div>
  )
  };
export default App;
