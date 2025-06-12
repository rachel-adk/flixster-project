import React from "react";
import './searchForm.css'

const Sidebar = ({favoriteMovies = [], watchedMovies = []}) => {
    console.log("watchedMovies:", watchedMovies);
    return(
        <div className="sidebar">
            <h2>Liked Movies(❤️)</h2>
            <ul>
                {/* {favoriteMovies && favoriteMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
                ))} */}
            </ul>

            <h2>Watched Movies(✅)</h2>
            <ul>
                {/* {watchedMovies && watchedMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
                ))} */}
            </ul>
            </div>
        )
}
export default Sidebar;
