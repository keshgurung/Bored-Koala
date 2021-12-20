import React from 'react'
import { useState, useEffect } from 'react'
import { getMovieData } from '../helpers/api'
import SearchIcon from '@material-ui/icons/Search'
import MovieCard from '../Components/MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [value, setValue] = useState()
  const typeChange = (event) => {
    setValue(event.target.value)
  }
  console.log(value)

  useEffect(() => {
    const getData = async () => {
      const allMovies = await getMovieData()
      setMovies(allMovies)
    }
    getData()
  }, [])
  console.log('the data is', movies)

  return (
    <>
      <div className='Search'>
        <input
          type='text'
          placeholder='Enter a Movie Title'
          onChange={typeChange}
        />
        <SearchIcon />
      </div>
      <section className='movie-list'>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default MovieList
