import axios from 'axios'

export const getJokeData = async () => {
  const config = {
    method: 'GET',
    url: 'https://api.chucknorris.io/jokes/random',
  }
  const response = await axios(config)
  return response.data
}

export const getMusicData = async () => {
  const config = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: { q: 'Kendrick Lamar' },
    headers: {
      'x-raidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }
  const response = await axios(config)
  return response.data
}

export const getMovieData = async () => {
  const config = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }

  const response = await axios(config)
  return response.data
}
