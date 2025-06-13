import React from "react";
import "./SortMovies.css";

const SortMovies = ({ onSort }) => {
  //handle sort
  const HandleSortChange = (event) => {
    onSort(event.target.value);
  };
  return (
    <select onChange={HandleSortChange}>
      <option value="home">Sort By</option>
      <option value="title"> Title</option>
      <option value="vote_average"> Voting Average</option>
      <option value="release_date"> Date Released</option>
    </select>
  );
};
export default SortMovies;
