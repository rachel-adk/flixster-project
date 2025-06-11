import React from "react";
import './searchForm.css'

function SearchForm({ onMovieChange }) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

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
        <input className="search-input" value={searchQuery} type="text" name="movie" placeholder="Enter movie name" onChange={handleInputChange} />
        <button className="search-button" type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
