import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getMovieData, getJokeData, getMusicData } from '../helpers/api'
import JokeCard from '../Components/JokeCard'

const Home = () => {
  // const navigate = useNavigate()

  const [click, setClick] = useState(false)
  const [value, setValue] = useState(null)
  const [movie, setMovie] = useState([])
  const [music, setMusic] = useState([])
  const [jokes, setJokes] = useState(null)

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
      const newJoke = getJokeData()
      setJokes(newJoke)
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
          <Link to={'/joke'}>
            <button
            // onClick={handleClick}
            // className='favorite styled'
            // type='button'
            // value='get random'
            >
              Get random jokes/quotes
            </button>
          </Link>
        </div>
      ) : (
        <></>
        // <section className='story-list'>
        //   {jokes ? (
        //     <JokeCard {...jokes} isHorizontal={true} />
        //   ) : (
        //     <div>
        //       <h4>Loading...</h4>
        //     </div>
        //   )}
        // </section>
      )}
    </>
  )
}

export default Home
