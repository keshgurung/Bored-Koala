import React from 'react'
// import { Link } from 'react-router-dom'

const SongCard = ({
  result,
  artist_names,
  full_title,
  song_art_image_thumbnail_url,
  url,
}) => {
  return (
    // <Link to={`/movies/${imdbID}`}>
    <div>
      <h4>{result.full_title}</h4>
      <p>{result.artist_names}</p>
      <picture>
        <img
          src={result.song_art_image_thumbnail_url}
          alt={result.full_title}
        />
      </picture>
      <p>
        <a href={result.url}>Get Lyrics Here !!</a>
      </p>
    </div>
    // </Link>
  )
}

export default SongCard
