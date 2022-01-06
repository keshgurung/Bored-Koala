import React from 'react'
import { useState, useEffect } from 'react'
import { getMovieData } from '../helpers/api'
// import SearchIcon from '@material-ui/icons/Search'
import MovieCard from '../Components/MovieCard'
// import { useNavigate } from 'react-router-dom'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('star') //make ' star' inside so that default value will be star in search item everytime the userrefreshes...
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
  // const getData = async () => {
  //   const allMovies = await getMovieData(search)
  //   setMovies(allMovies)
  //   }
  //   getData()
  //   console.log('the data is', movies)
  // }, [])

  return (
    <>
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
          {/* <button onClick={handleChange}>
            <SearchIcon />
          </button> */}
        </form>
      </div>
      {!movies ? (
        <p>
          {' '}
          Sorry, there are no movies with '{search}' in the title. Try using
          other characters.{' '}
        </p>
      ) : (
        <section className='movie-list'>
          <p> Movies with '{search}' in their title </p>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default MovieList