import React from 'react'
import { useEffect, useState } from 'react'
import { getJokeData } from '../helpers/api'
import JokeCard from '../Components/JokeCard'
import { Link } from 'react-router-dom'

const JokeList = () => {
  const [jokes, setJokes] = useState(null)
  const handleClick = () => {
    getJokeData().then(setJokes)
  }
  useEffect(() => {
    getJokeData().then(setJokes)
  }, [])

  return (
    <section className='joke-list'>
      {jokes ? (
        <div className='joke-list-container'>
          <p> Welcome to Chuck Norris Jokes:</p>
          <JokeCard {...jokes} isHorizontal={true} />

          <Link to={'/'}>
            <button>home</button>
          </Link>
          <button onClick={handleClick} type='button' value='next'>
            next
          </button>
        </div>
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
}
export default JokeList
