import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <div className="Bored">
        <h1>Welcome to Bored Koala</h1>
        <h3>what would you like to do today</h3>
        <Link to={'/movies'}>
          <button
          // onClick={handleClick}
          // className='favorite styled'
          // type='button'
          // value='browse movie'
          >
            Browse Movie
          </button>
        </Link>
        <Link to={'/music'}>
          <button>Search Music</button>
        </Link>
        <Link to={'/joke'}>
          <button>Get Random Jokes</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
