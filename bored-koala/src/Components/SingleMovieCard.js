import React from 'react'

const SingleMovieCard = ({
  Title,
  Genre,
  Plot,
  Poster,
  Released,
  Runtime,
  Writer,
  Director,
  Language,
  imdbRating,
  Metascore,
  Country,
  BoxOffice,
}) => {
  return (
    <div>
      <p>{Title}</p>
      <picture>
        <img src={Poster} alt={Title} />
      </picture>
      <p>
        imdb Rating:{imdbRating},Metascore:{Metascore}
      </p>
      <p>Released:{Released}</p>
      <p>Runtime:{Runtime}</p>
      <p>Genre:{Genre}</p>
      <p>Writer:{Writer}</p>
      <p>Director:{Director}</p>
      <p>{Plot}</p>
      <p>Language:{Language}</p>
      <p>Country:{Country}</p>
      <p>BoxOffice:{BoxOffice}</p>
    </div>
  )
}

export default SingleMovieCard
