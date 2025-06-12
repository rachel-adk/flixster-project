import React from "react";
import './searchForm.css'

const Sidebar = ({likedMovies = [], watchedMovies = [], setPage}) => {
    // create state to change page
    console.log("watchedMovies:", watchedMovies);
    console.log("likedMovies:", likedMovies);
    return(
        <div className="sidebar">
            <h2>Liked Movies(❤️)</h2>
            {/* <ul>
                {likedMovies && likedMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
                ))}
            </ul> */}

            <h2>Watched Movies(✅)</h2>
            {/* <ul>
                {watchedMovies && watchedMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
                ))}
            </ul> */}
            <button onClick={() => setPage('watched')}>Watched</button>
            <button onClick={() => setPage('liked')}>Liked</button>
            {/* setPage('clicked value') */}
        </div>
        )
}
export default Sidebar;
