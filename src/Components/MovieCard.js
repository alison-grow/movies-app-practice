import React from 'react';
import "./MovieCard.css";

function MovieCard({title, type, posterurl}) {
    return (
        <div>
            <img src={posterUrl} alt={title} />

            <h3 className="movie-card_title">
                {title} 
            </h3>

            <div className="movie-card_type">
                {type}
            </div>
        </div>
    )

};

export default MovieCard;