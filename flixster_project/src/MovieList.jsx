import React, { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'
//import SearchForm from './searchForm'



function MovieList () {
  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')


  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
    try{
      const endpoint = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`
        : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      const response = await fetch(endpoint)
      const data = await response.json();
      if (response.ok) {
        setMovies(data.results);
        setError(null);
      }else {
        setError(data.status_message) || "Error fetching data";
      }
    }catch(err){
      setError("Network error or invalid API key");
    }
    finally{
      setIsLoading(false);
    }
    };
    fetchData();
  }, [searchQuery]);

  const loadMore = async () => {
    if (searchQuery) return
    try{
      const nextPage = pageNumber + 1
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${nextPage}`)
      const data = await response.json();
      setPageNumber(nextPage)
      setMovies([...movies, ...data.results])

    }catch(err){
      setError("Error loading movies");
    }
  }



  if (isLoading) return <div>Loading...</div>
  if (error) return <p>{error}</p>
  return (
    <>
      {/* <SearchForm onMovieChange={handleMovieChange}
                  onClearSearch={handleClearSearch} /> */}
      <div className='MovieList'>
        {movies.map((movie, index) => <MovieCard key={index}
                                        title={movie.title}
                                        movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        rating={movie.vote_average}/>
      )}
      </div>
        {!searchQuery && (
          <div className='loadMore'>
          <button onClick={loadMore}>
          <p>Load More</p>
          </button>
      </div>
    )}
  </>
);
}


export default MovieList;
