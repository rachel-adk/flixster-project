import React, { useEffect, useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchForm from './SearchForm'
//import data from './data'

const handleMovieChange = (query) => {
  setSearchQuery(query)
  //setPageNumber(1)
}

const handleClearSearch = () => {
  setSearchQuery('')
  //setPageNumber(1)
}

function App() {
  return (
    <div className="App">
      <h1>Flixster</h1>
      <SearchForm onMovieChange={handleMovieChange}/>
      <MovieList />
    </div>
  )
  };
export default App;
