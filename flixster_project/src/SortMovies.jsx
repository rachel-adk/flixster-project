import React from "react";
import './SortMovies.css'

// const closeModal = () => {
//   document.querySelector(".modal").style.display = "none";
// };

const SortMovies = ({onSort}) => {
    //handle sort
    const HandleSortChange = (event) => {
    onSort(event.target.value);
     }
    return (
        <select onChange={HandleSortChange}>
            <option value='' > Sort By </option>
            <option value='title'> Title</option>
            <option value='vote_average'> Rating</option>
            <option value='release_date'> Date</option>
        </select>

  )
};
export default SortMovies ;
