import React from "react";
import './ModalCard.css'

// const closeModal = () => {
//   document.querySelector(".modal").style.display = "none";
// };

const ModalCard = ({movie, onClose}) => {
  return (
    <div className="modal" onClick={onClose}>
        <div className="modalContent"
            onClick={e => e.stopPropagation()}>
                <h1>{movie.title}</h1>
                <img className="modalImage" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <p>Release Date: {movie.release_date}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Overview: {movie.overview}</p>
                <p>Genre: {movie.genres?.map(g=>g.name).join(",")}</p>
                <button className="close" onClick={onClose}>Close</button>

        </div>
    </div>
    )
};

export default ModalCard;
