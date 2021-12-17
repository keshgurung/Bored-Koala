import React from 'react'
import { useEffect, useState } from 'react'
import { getJokeData } from '../helpers/api'
import JokeCard from '../Components/JokeCard'

const JokeList = () => {
  const [jokes, setJokes] = useState(null)
  useEffect(() => {
    getJokeData().then(setJokes)
  }, [])

  return (
    <section className='story-list'>
      {jokes ? (
        <JokeCard {...jokes} isHorizontal={true} />
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
    </section>
  )
}
export default JokeList
