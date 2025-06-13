import React, { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";
import WatchedList from "./WatchedList";
import LikedList from "./LikedList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [page, setPage] = useState("home");
  const handleMovieChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const toggleWatched = (movie) => {
    setWatchedMovies((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const toggleLiked = (movie) => {
    setLikedMovies((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const handleSearchResults = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onMovieChange(searchQuery.trim());
    }
  };

  const renderContent = () => {
    switch (page) {
      case 'now_playing':
        return  <MovieList
            searchQuery={searchQuery}
            likedMovies={likedMovies}
            watchedMovies={watchedMovies}
            toggleLiked={toggleLiked}
            toggleWatched={toggleWatched} />
      case 'watched':
        return <WatchedList watchedMovies={watchedMovies}/>
      case 'favorited':
        return <FavoriteList/>
      default:
        return  <MovieList
        searchQuery={searchQuery}
        likedMovies={likedMovies}
        watchedMovies={watchedMovies}
        toggleLiked={toggleLiked}
        toggleWatched={toggleWatched} />
    }
  }
  return (
    <div className="App">
      <header className="App_header">
        <Sidebar setPage={setPage} />
        <h1>Flixster</h1>
        <h2>Now Playing</h2>
      </header>
      <SearchForm
        onMovieChange={handleMovieChange}
        onClearSearch={handleClearSearch}
      />
      <Sidebar setPage={setPage}/>
        {page === 'liked' ? (
          <LikedList likedMovies={likedMovies} />
        ) : page === 'watched' ? (
          <WatchedList watchedMovies={watchedMovies} />
        ) : (
          <MovieList
            searchQuery={searchQuery}
            likedMovies={likedMovies}
            watchedMovies={watchedMovies}
            toggleLiked={toggleLiked}
            toggleWatched={toggleWatched} />
          )}

      <footer className="App_footer">
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}
export default App;
