import React, { useState } from "react";
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

  const renderContent = () => {
    switch (page) {
      case "watched":
        return <WatchedList watchedMovies={watchedMovies} />;
      case "favorited":
        return <LikedList likedMovies={likedMovies} />;
      default:
        return (
          <>
            <SearchForm
              onMovieChange={handleMovieChange}
              onClearSearch={handleClearSearch}
            />
            <MovieList
              searchQuery={searchQuery}
              likedMovies={likedMovies}
              watchedMovies={watchedMovies}
              toggleLiked={toggleLiked}
              toggleWatched={toggleWatched}
            />
          </>
        );
    }
  };

  return (
    <div className="App">
      <header className="App_header">
        <h1>Flixster</h1>
        <h2>Now Playing</h2>
        <Sidebar setPage={setPage} />
      </header>

      <main className="App_main">
        {renderContent()}
      </main>

      <footer className="footer">
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}

export default App;
