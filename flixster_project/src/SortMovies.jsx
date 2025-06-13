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
      <option value="title"> Alphabetical Order(A-Z)</option>
      <option value="vote_average"> Voting Average(Increasing)</option>
      <option value="release_date"> Date Released</option>
    </select>
  );
};
export default SortMovies;
