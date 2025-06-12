import React, { useState } from 'react'
import './MovieCard.css'

const MovieCard = ({title, movieImage, rating, modalDisplay, movie_id, isLiked, hasWatched, onToggleLiked, onToggleWatched }) => {
    const ratingFormat = rating.toFixed(1);
    // const [isLiked, setIsLiked] = useState(false);
    // const [hasWatched, setHasWatched] = useState('👀');

    // const clickLike = (event) => {
    //     event.stopPropagation()
    //     setIsLiked((prev) => !prev);
    // }

    // const clickWatched = (event) => {
    //     event.stopPropagation();
    //     setHasWatched((prev) => (prev === '👀' ? '✅' : '👀'))
    // }

    return (
        <div className='MovieCard' onClick={() => modalDisplay(movie_id)}>
            <div className='movieImage'>
                <img src={movieImage} alt={title} />
            </div>
            <div className='movieInfo'>
                <h3>{title}</h3>
                <h4>Rating: {ratingFormat}</h4>
                <div className='movieIcons'>
                    <p className='likeButton' onClick={(e) => {
                        e.stopPropagation();
                        onToggleLiked();
                    }}>
                        {isLiked ? '❤️' : '🤍'}
                    </p>
                    <p className='watchedButton' onClick={(e) => {
                        e.stopPropagation();
                        onToggleWatched();
                    }}>
                        {hasWatched ? '✅' : '👀'}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
