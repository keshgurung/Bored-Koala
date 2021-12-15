import React from 'react'
import { useEffect, useState } from 'react'
import { getMovieData } from '../helpers/api'

const JokeList = () => {
  // const [quote, setQuote] = useState([])

  // useEffect(() => {
  //   const getAllData = async () => {
  //     try {
  //       const allData = await getData()
  //       setQuote(allData)
  //       console.log(quote)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getAllData()
  // }, [])
  // console.log(quote)

  // useEffect(() => {
  //   fetch('https://motivational-quotes1.p.rapidapi.com/motivation', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
  //       'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
  //     },
  //     body: {
  //       key1: 'value',
  //       key2: 'value',
  //     },
  //   })
  //     .then((response) => {
  //       const data = response.json()
  //     })
  //     .then((data) => console.log(data[1]))
  //     .catch((err) => {
  //       console.error(err)
  //     })
  //   setQuote
  //   JokeList()
  // }, [])

  useEffect(() => {
    getMovieData()
  }, [])
  return <div></div>
}

export default JokeList
