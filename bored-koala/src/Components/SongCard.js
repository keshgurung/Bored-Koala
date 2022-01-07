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
    <div className='music-card'>
      <h4>{result.full_title}</h4>
      <picture>
        <img
          src={result.song_art_image_thumbnail_url}
          alt={result.full_title}
        />
      </picture>
      <p className='lyrics'>
        <a href={result.url} target='_blank' rel='noreferrer'>
          Get Lyrics Here !!
        </a>
      </p>
    </div>
  )
}

export default SongCard
