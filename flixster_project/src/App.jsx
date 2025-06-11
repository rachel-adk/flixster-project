import React, { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

//import data from './data'
function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleMovieChange = (newQuery) => {
    setSearchQuery(newQuery)
    //setPageNumber(1)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    //setPageNumber(1)
  }

  return (
    <div className="App">
      <h1>Flixster</h1>
      <SearchForm
        onMovieChange={handleMovieChange}
        onClearSearch={handleClearSearch}
      />
      <MovieList searchQuery={searchQuery}/>
    </div>
  )
  };
export default App;
