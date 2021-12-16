import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const handleClick = (event) => {
    return event.target.value
  }

  return (
    <div>
      <h1>Welcome to Bored Koala</h1>
      <h3>what would you like to do today</h3>
      <Link to={'/jokelist'}>
        <button
          onClick={handleClick}
          className='favorite styled'
          type='button'
          value='browse movie'
        >
          Browse Movie{' '}
        </button>
      </Link>
      <button
        onClick={handleClick}
        className='favorite styled'
        type='button'
        value='search movie'
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
  )
}

export default Home
