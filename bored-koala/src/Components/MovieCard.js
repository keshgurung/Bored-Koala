import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
  return (
    <Link to={`/movies/${imdbID}`}>
      <div>
        <p>{Title}</p>
        <picture>
          <img src={Poster} alt={Title} />
        </picture>
        <p>Year: {Year}</p>
      </div>
    </Link>
  )
}

export default MovieCard
