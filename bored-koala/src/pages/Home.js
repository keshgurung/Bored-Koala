import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  // const navigate = useNavigate()
  // const handleClick = (event) => {
  //   const newVal = event.target.value
  //   setClick(true)
  //   setValue(newVal)
  // }
  // useEffect(() => {
  //   // console.log(value)
  //   if (value === 'browse movie') {
  //     getMovieData()
  //   } else if (value === 'search music') {
  //     getMusicData()
  //   } else if (value === 'get random') {
  //     const newJoke = getJokeData()
  //     setJokes(newJoke)
  //   }
  // }, [value])
  return (
    <>
      {/* {!click ? ( */}
      <div>
        <h1>Welcome to Bored Koala</h1>
        <h3>what would you like to do today</h3>
        <Link to={'/movie'}>
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

      {/* ) : (
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
      )} */}
    </>
  )
}

export default Home
