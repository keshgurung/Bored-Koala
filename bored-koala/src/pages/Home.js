import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovieData, getJokeData, getMusicData } from '../helpers/api'

const Home = () => {
  const [click, setClick] = useState(false)
  const [value, setValue] = useState(null)
  const handleClick = (event) => {
    const newVal = event.target.value
    setClick(true)
    setValue(newVal)
  }

  useEffect(() => {
    // console.log(value)
    if (value === 'browse movie') {
      getMovieData()
    } else if (value === 'search music') {
      getMusicData()
    } else if (value === 'get random') {
      getJokeData()
    }
  }, [value])

  return (
    <>
      {!click ? (
        <div>
          <h1>Welcome to Bored Koala</h1>
          <h3>what would you like to do today</h3>
          {/* <Link to={'/jokelist'}> */}
          <button
            onClick={handleClick}
            className='favorite styled'
            type='button'
            value='browse movie'
          >
            Browse Movie{' '}
          </button>
          {/* </Link> */}
          <button
            onClick={handleClick}
            className='favorite styled'
            type='button'
            value='search music'
          >
            Search Music{' '}
          </button>
          <button
            onClick={handleClick}
            className='favorite styled'
            type='button'
            value='get random'
          >
            Get random jokes/quotes
          </button>
        </div>
      ) : (
        console.log(value)
      )}
    </>
  )
}

export default Home
