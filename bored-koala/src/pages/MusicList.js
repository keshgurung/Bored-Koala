import React from 'react'
import { useState, useEffect } from 'react'
import { getMusicData } from '../helpers/api'
import SongCard from '../Components/SongCard'
// import { useNavigate } from 'react-router-dom'

const MusicList = () => {
  const [songs, setSongs] = useState([])
  const [search, setSearch] = useState('eminem') //make ' star' inside so that default value will be star in search item everytime the userrefreshes...
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
    getMusicData(search).then(setSongs)
  }, [search])
  // const getData = async () => {
  //   const allMovies = await getMovieData(search)
  //   setMovies(allMovies)
  //   }
  //   getData()
  //   console.log('the data is', songs)
  // }, [])

  return (
    <div className='search'>
      <h4>Enter an Artist Name:</h4>
      <div className='Search'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            value={value}
            placeholder='Enter an Artist Name'
            onChange={handleChange}
          />
          {/* <button onClick={handleChange}>
            <SearchIcon />
          </button> */}
        </form>
      </div>
      {!songs ? (
        <div className='not-found'>
          <p>
            {' '}
            Sorry, there are no songs with '{search}' in the title. Try using
            other characters.{' '}
          </p>
        </div>
      ) : (
        <>
          <div div className='movie'>
            <p> Greatest Top 10 Hit Songs of '{search}' : </p>
          </div>
          <section className='movie-list'>
            <ul>
              {songs.map((song) => (
                <li key={song.result.id}>
                  <SongCard {...song} />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  )
}

export default MusicList
