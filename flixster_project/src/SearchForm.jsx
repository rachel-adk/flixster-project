import React from "react";
import './searchForm.css'

function SearchForm({ onMovieChange, onClearSearch }) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchQuery.trim()) {
            onMovieChange(searchQuery.trim())
        }

    };

    const handleClear = () => {
        setSearchQuery('');
        onClearSearch();
    };


    return (
        <form className="search-form" onSubmit={handleSubmit}>
        <input
            className="search-input"
            value={searchQuery}
            type="text"
            name="movie"
            placeholder="Enter movie name"
            onChange={handleInputChange}
        />
        <button className="search-button" type="submit">Search</button>
        {searchQuery && (
            <button className="clear-button" onClick={handleClear}>Now Playing</button>
        )}
        </form>
    )
}

export default SearchForm;
