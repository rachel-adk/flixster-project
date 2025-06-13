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
            placeholder="Search for a movie..."
            onChange={handleInputChange}
        />
        <button className="search-button" type="submit">Search</button>
        <button className="clear-button" onClick={handleClear}>Clear</button>
        </form>
    )
}

export default SearchForm;
