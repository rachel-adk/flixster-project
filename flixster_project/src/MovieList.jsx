import React, { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'
import ModalCard from './ModalCard'
import SortMovies from './SortMovies';



function MovieList ( {searchQuery, likedMovies, watchedMovies, toggleLiked, toggleWatched, modalDisplay}) {
  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectCard, setSelectCard] = useState(null)



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
        setMovies(data.results.filter(({poster_path}) => poster_path != null));
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
  
//handle sort

const handleSort = async(value) =>{
  const sortedMovies = [...movies]
  //sort movies using sortedMovies
  if (value === "title"){
    sortedMovies.sort((a,b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  }
  if (value === "vote_average"){
    sortedMovies.sort((a,b) => b.vote_average - a.vote_average);
  }
  if (value === "release_date"){
    sortedMovies.sort((a,b) => b.release_date.localeCompare(a.release_date));
  }
  setMovies(sortedMovies);

}




  return (
    <>

    <SortMovies onSort={handleSort}/>



      <main>
        <div className='movieList'>
        {movies.map((movie, index) => <MovieCard key={index}
                                        title={movie.title}
                                        movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        rating={movie.vote_average}
                                        modalDisplay={modalDisplay}
                                        movie_id={movie.id}
                                        isLiked={likedMovies.filter((m) => m.id === movie.id).length>0}
                                        hasWatched={watchedMovies.filter((m) => m.id === movie.id).length>0}
                                        onToggleLiked={() => toggleLiked(movie)}
                                        onToggleWatched={() => toggleWatched(movie)}/>
      )}
        </div>
      </main>
        {!searchQuery && (
          <div className='loadMore'>
          <button onClick={loadMore}>
          <p>Load More</p>
          </button>
      </div>
    )}
    {selectCard && (
      <ModalCard movie = {selectCard}
                            onClose={() => setSelectCard(null)}/>)}</>

  )}


export default MovieList;
