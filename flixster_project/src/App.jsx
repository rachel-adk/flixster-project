import React, { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";

//import data from './data'
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [hasWatched, setHasWatched] = useState("👀");
  const handleMovieChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const toggleWatched = (event) => {
    setHasWatched((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const toggleLike = (event) => {
    setIsLiked((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const handleNowPlaying = () => {
    setSearchQuery("");
    onClearSearch();
  };

  const handleSearchResults = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onMovieChange(searchQuery.trim());
    }
  };

  return (
    <div className="App">
      <header className="App_header">
        <h1>Flixster</h1>
        <button onClick={handleNowPlaying}>
          <h4>Now Playing</h4>
        </button>
        <button onClick={handleSearchResults}>
          <h4>Search Results</h4>
        </button>
      </header>
      <SearchForm
        onMovieChange={handleMovieChange}
        onClearSearch={handleClearSearch}
      />
      <MovieList searchQuery={searchQuery} />
      <Sidebar likedMovies={isLiked} watchedMovies={hasWatched} />

      <footer className="App_footer">
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}
export default App;
