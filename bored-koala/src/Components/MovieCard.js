import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
  return (
    <div className='movie-card'>
      <Link to={`/movies/${imdbID}`}>
        <h3>{Title}</h3>
        <picture>
          <img src={Poster} alt={Title} />
        </picture>
        <p>Year: {Year}</p>
      </Link>
    </div>
  )
}

export default MovieCard
