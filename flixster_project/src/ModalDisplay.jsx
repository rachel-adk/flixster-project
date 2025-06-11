import React from "react";
import 'ModalDisplay.css'

const ModalDisplay = ({movie, onClose}) => {
  return (
    <div className="modal" onClick={onClose}>
        <div className="modalContent"
            onClick={e => e.stopPropagation()}>
                <h1>{movie.title}</h1>
                <img className="modalImage" src={movie.image} alt={movie.title}/>
                <p>Release Date: {movie.release_date}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Overview: {movie.overview}</p>
                <p>Genre: {movie.genres?.map(g=>g.name).join(",")}</p>
        </div>
    </div>
  )
};
