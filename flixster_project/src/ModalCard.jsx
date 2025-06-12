import React from "react";
import './ModalCard.css'


const ModalCard = ({movie, onClose}) => {
  return (
    <div className="modalOverlay" onClick={() => {
      console.log("background")
      onClose();
      }}>
      <div className="modalContent"
          onClick={e => e.stopPropagation()}>
              <h1>{movie.title}</h1>
              <img className="modalImage" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              <p>Release Date: {movie.release_date}</p>
              <p>Runtime: {movie.runtime} minutes</p>
              <p>Overview: {movie.overview}</p>
              <p>Genre: {movie.genres?.map(g=>g.name).join(",")}</p>

              <iframe
              width="560"
              height="315"
              src= {`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1`}
              title="Trailer"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin"
               allowfullscreen>
               </iframe>






              <button className="close" onClick={onClose}>Close</button>

      </div>
    </div>
    )

};

export default ModalCard;
