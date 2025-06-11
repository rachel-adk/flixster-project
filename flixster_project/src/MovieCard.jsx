import React from 'react'
import './MovieCard.css'
// import ModalDisplay from './ModalDisplay'

const MovieCard = ({title, movieImage, rating, onClick}) => {
    const ratingFormat = rating.toFixed(1);
    return (
        <>
        <div className='MovieCard' onClick={onClick}>
            <div className='movieImage'>
                <img src={movieImage} alt={title} />
            </div>
            <div className='movieInfo'>
                <h3>{title}</h3>
                <h4>Rating: {ratingFormat}</h4>
            </div>
        </div>


        </>
    );
};

export default MovieCard;
