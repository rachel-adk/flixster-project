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
      <header className="App_header">
        <h1>Flixster</h1>
      </header>
      <SearchForm
        onMovieChange={handleMovieChange}
        onClearSearch={handleClearSearch}
      />
      <MovieList searchQuery={searchQuery}/>

      <footer className="App_footer">
        <p>Copyright 2025</p>
      </footer>

    </div>
  )
  };
export default App;
