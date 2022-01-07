# Project-2 React Hackathon- Bored Koala

A live version of this project can be found on netlify --> https://boredkoala.netlify.app/

## Goal

To create a web application using React and external APIs.

# Time Frame

2 days

## Technologies Used

- JavaScript (ES6)
- React
- Insomnia
- HTML5
- SAAS
- Bootstrap
- React Bootstrap
- Rapid API
- GitHub
- Netlify

## Overview

Bored Koala is a React API app project developed using two api's from RapidAPI and chucknorris jokes api where you can search movies name, ratings and more as well as music artists, their top 10 hit songs and lyrics and you can freshen up by reading to chucknorris jokes too. All the data are fetched from API calls and shown in my react app.

## Instructions

1. The home page of the web app will display options for users to choose from:

![1](/assets/1.png)

2. By selecting a option, it will redirect to the page requested. By default, the page will show all the movies with avengers in their title.

![2](/assets/2.png)

3. Use the search bar to search for movies and the result will be displayed on the screen.

![3](/assets/3.png)

4. Click on a single movie to view more information such as (rating, plot, box office collection, language) about the movie.

![4](/assets/4.png)

5. Click on home tab, and select other options such as (search music) to find out top hits song, lyrics of the searched artist.

![5](/assets/5.png)

## Process

I started the project by searching for a suitable API that could be useful to my application, and then, I selected RapidAPI IMDB Movie API,and Music APi as my API to fetch data to my application.
The first stage of the development was to read the documentation of the API endpoints and test the endpoints using Insomnia to understand the structure of data received from the API call.

```
0:{5 items
"Title":"Avengers: Endgame"
"Year":"2019"
"imdbID":"tt4154796"
"Type":"movie"
"Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
}
```

After getting information about the data structure, axios get request was called to fetch data from the api and to show it in the application. Using the function getMovieData() below,the app made an axios get request to the API to retrieved data and set it on our component state. To display these data we used React components in our main app, the list of movies that was retrieved from the API was shown in movies page.

```
 export const getMovieData = async (search) => {
  const config = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: `${search}` },
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': 'aeb717ee1emsha514d9d6575c369p1ee3ffjsne764f2a7e700',
    },
  }
  const response = await axios(config)
  return response.data.Search
}
```

To provide better experience for the user, search bar was added in the application which allows user to search and find the movie, they are looking.

```
** Use of react hook, useEffect to fetch data from API everytime new search is entered. **

useEffect(() => {
    getMovieData(search).then(setMovies)
  }, [search])
```

Another important react hook, useState() was used to make functional components stateful in the application.

```
** value of getMovieData is set to movies through setMovies while useEffect()**
const [movies, setMovies] = useState([])

```

After the received data is saved on movies, i use (map) function to show all the movies on my application page.

```
** map is used to populate the result by calling every element in the movies array **
{movies.map((movie) => (
  <li key={movie.imdbID}>
  <MovieCard {...movie} />
  </li>
 ))}

```
