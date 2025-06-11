import React from 'react'
import './MovieCard.css'
// import ModalDisplay from './ModalDisplay'

const MovieCard = ({title, movieImage, rating}) => {
    return (
        <>
        <div className='MovieCard'>
            <div className='movieImage'>
            <img src={movieImage} alt={title} />
            </div>

            <div className='movieInfo'>
                <h3>{title}</h3>
                <h4>Rating:{rating}</h4>
            </div>
        </div>


        </>
    );
};

export default MovieCard;
