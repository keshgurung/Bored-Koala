import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../helpers/api'
import SingleMovieCard from '../Components/SingleMovieCard'

const SingleMovie = () => {
  const [movie, setMovie] = useState([])
  const { imdbID } = useParams()

  useEffect(() => {
    getSingleMovie(imdbID).then(setMovie)
  }, [imdbID])

  return (
    <section className='single'>
      {movie ? (
        <SingleMovieCard {...movie} isHorizontal={true} />
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
}

export default SingleMovie
