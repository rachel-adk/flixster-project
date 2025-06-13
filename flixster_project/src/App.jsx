import React, { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";
import WatchedList from "./WatchedList";
import LikedList from "./LikedList";
import ModalCard from "./ModalCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [page, setPage] = useState("home");
  const [selectCard, setSelectCard] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

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

  const modalDisplay = async(movieId) => {
    const [movieResponse, videoResponse] =  await Promise.all ([fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`), fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)])
    const movieData = await movieResponse.json();
    const videoData = await videoResponse.json();
    const MovieTrailer = videoData.results.find((video) => video.type === "Trailer" && video.site === "YouTube");
    setSelectCard({...movieData, trailerKey: MovieTrailer ? MovieTrailer.key : null})
  }

  const renderContent = () => {
    switch (page) {
      case "watched":
        return <WatchedList
                  watchedMovies={watchedMovies}
                  likedMovies={likedMovies}
                  toggleLiked={toggleLiked}
                  toggleWatched={toggleWatched}
                  modalDisplay={modalDisplay}
                 />;
      case "liked":
        return <LikedList
                 likedMovies={likedMovies}
                 watchedMovies={watchedMovies}
                 toggleLiked={toggleLiked}
                 toggleWatched={toggleWatched}
                 modalDisplay={modalDisplay}/>;
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
              modalDisplay={modalDisplay}
            />
          </>
        );
    }
  };



  return (
    <div className="App">
      <header className="App_header">
        <div className="banner">
          <h1>Flixster🎞️</h1>
          <Sidebar setPage={setPage} />
        </div>

        <h2>
            {searchQuery ? `Search Results for "${searchQuery}"` :
            page === 'home' ? 'Now Playing' :
            page === 'liked' ? 'Favorites' :
            'Watched Movies'}
        </h2>
      </header>

      <main className="App_main">
        {renderContent()}
        {selectCard && (
          <ModalCard
            movie={selectCard}
            onClose={() => setSelectCard(null)}
          />
        )}
      </main>

      <footer className="footer">
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}

export default App;
