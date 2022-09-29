import React from 'react';


function MovieDetails({
    posterUrl,
    title,
    rated,
    runtime,
    genre,
    plot,
    actors,
    rating,
}) {
  return (
    <div>
        <img src={posterUrl} alt={title} />
    </div>
    <div>
        <h1>{title}</h1>
        <span>{rating}</span>

        <ul>
            <li>{rated}</li>
            <li>{runtime}</li>
            <li>{genre}</li>
        </ul>

        <div>
            <h3>Plot</h3>
            <p>{plot}</p>
        </div>
    </div>
  )
}

MovieDetails.propTypes = {
    posterUrl: PropTypes.String,
    title: PropTypes.string.isRequired,
    rated: ,
    runtime: ,
    genre: ,
    plot: ,
    actors: ,
    rating: ,
}


export default MovieDetails