import React, { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'



function MovieList () {
  const [movies, setMovies] = useState([1])
  const [pageNumber, setPageNumber] = useState([1])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      const data = await response.json();
      if (response.ok) {
        setMovies(data.results);
        console.log(data.results)
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
  }, []);

  const loadMore = async () => {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      const data = await response.json();
      setMovies([...movies, ...data.results])
      setPageNumber([pageNumber + 1])
    }catch(err){
      setError("Error loading movies");
    }
  }
  if (isLoading) return <div>Loading...</div>
  if (error) return <p>{error}</p>
  return (
    <>
      <div className='MovieList'>
        {movies.map((movie, index) => <MovieCard key={index}
                                        title={movie.title}
                                        movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        rating={movie.vote_average}/>)}
      </div>
        <div className='loadMore'>
          <button onClick={loadMore}>
          <p>Load More</p>
          </button>
        </div>
    </>
  );
};

export default MovieList;
