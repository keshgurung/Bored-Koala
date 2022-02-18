import React from 'react'
import { useState, useEffect } from 'react'
import { getMovieData } from '../helpers/api'
import MovieCard from '../Components/MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('avengers') //make ' star' inside so that default value will be star in search item everytime the userrefreshes...
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    event.preventDefault()
    console.log('hers')
    const values = event.target.value
    setValue(values)
  }
  console.log('the value is', value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(value)
    setValue('')
  }
  console.log('the search is', search)

  useEffect(() => {
    getMovieData(search).then(setMovies)
  }, [search])

  return (
    <div className='search'>
      <h4>Search Movies:</h4>
      <div className='Search'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            value={value}
            placeholder='Enter a Movie Title'
            onChange={handleChange}
          />
        </form>
      </div>
      {!movies ? (
        <div className='not-found'>
          <p>
            {' '}
            Sorry, there are no movies with '{search}' in the title. Try using
            other characters.{' '}
          </p>
        </div>
      ) : (
        <>
          <div div className='movie'>
            <p> Movies with '{search}' in their title </p>
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
      )}
    </div>
  )
}

export default MovieList
