import axios from 'axios'

export const getMovieData = async () => {
  // export const getData = async () => {
  //   const config = {
  //     method: 'get',
  //     url: `https://motivational-quotes1.p.rapidapi.com/motivation`,
  //     headers: {
  //       'content-type': 'application/json',
  //       'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
  //       'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
  //     },
  //     body: {
  //       key1: 'value',
  //       key2: 'value',
  //     },
  //   }
  //   const response = await axios(config)
  //   return response.data
  // }

  const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: { q: 'Kendrick Lamar' },
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}
// const options = {
//   method: 'GET',
//   url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//   params: { s: 'Avengers Endgame', page: '1', r: 'json' },
//   headers: {
//     'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//     'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
//   },
// }

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.error(error)
//   })
