import React from "react";
import './searchForm.css'

function SearchForm({ onMovieChange }) {
    const handleSubmit = (event) => {
        console.log('handleSubmit')
        event.preventDefault()
        const formData = new FormData(event.target)
        const movieName = formData.get('movie')
        onMovieChange(movieName)
        event.target.reset();
};

    return (
        <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="text" name="movie" placeholder="Enter movie name" />
        <button className="search-button" type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
