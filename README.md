# Project-2 React Hackathon- Bored Koala

** Bored Koala ** - This is my second project from the General Assembly Course SEI-59.

A live version of this project can be found on netlify --> https://boredkoala.netlify.app/

## Goal

- To create a web application using React and external APIs within 2 days time frame,
- Data to be fetched from external API using axios,
- Using React.js on the frontend,
- Deploy project online,

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

Bored Koala is a React API app project developed using two api's from RapidAPI and chucknorris jokes api where you can search movies name, ratings and more as well as music artists, their top 10 hit songs and lyrics and you can freshen up by reading to Chuck Norris jokes too. All the data is fetched from API calls and shown in my react app.

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

# Planning:

I started the project by searching for a suitable API that could be useful to my application, and then, I selected RapidAPI's IMDB Movie API,and Music API as my API to fetch data to my application. After selecting API, i created a wireframe on how our application will look on the frontend.

![p2](/assets/p2.jpg)

# App Development:

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

After getting information about the data structure, axios get request was called to fetch data from the api and to show it in the application. Using the function getMovieData() below,the app made an axios get request to the API to retrieved data and set it on our component state. To display these data we used React components in our main app, the list of movies that was retrieved from the API was shown on movies page.

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

To provide a better experience for the user, a search bar was added in the application which allows users to search and find the movie they are looking for.

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

After the received data is saved on movies, i used (map) function to show all the movies on my application page.

```
** map is used to populate the result by calling every element in the movies array **
{movies.map((movie) => (
  <li key={movie.imdbID}>
  <MovieCard {...movie} />
  </li>
 ))}

```

## Challenges

The main challenge of this project was to apply a search option in the application and get results accordingly. The value from the search bar has to be updated with the API search params to get the result.

Secondly, it was a bit tedious to get all the information about the movies from a single request. Data from the first request had to be passed to another request to get the desired result, with the movie id.

Error handling was also a challenging aspect of the project. Getting a negative response from axios request and showing the result in the page was a bit tricky and challenging.

## Wins

Using new concept of hooks in react such as useState(), useEffect() to get the desired result was my biggest win. In the search bar, the search value submitted was first passed to setValue() where it will record the changed searched value and than later passed to setSearch() when pressed enter. The new search value was passed as params in the axios get request in template literals as the value keeps changing when user enters different search values.

```
** Form input and change **
<input
            type='text'
            name='search'
            value={value}
            placeholder='Enter a Movie Title'
            onChange={handleChange}
/>

** Storing changing value **

const handleChange = (event) => {
    event.preventDefault()
    const values = event.target.value
    setValue(values)
  }

** Setting value into search that we will use in axios get request **

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(value)
    setValue('')
  }

** search value as params with template literals (` `)

params: { s: `${search}` },

```

Getting values from previous request:
With the search results, a unique imdbID was returned which was used to get more information about the movies. To reuse the imdbID value in another request, another important react hook, useParams() was used.

```
** use od useParams() hook **
const { imdbID } = useParams()

** Getting result of single query using unique imdbID from previous request **

  useEffect(() => {
    getSingleMovie(imdbID).then(setMovie)
  }, [imdbID])

```

Another important win was the use of ternary operator in the application for error messages or when the search result didnot exist.

```
** using ? for error message **
{movie ? (
        <SingleMovieCard {...movie} isHorizontal={true} />
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
)}
```

## Key Learnings:

- Create React app, and use it to build the frontend of the application,
- JSX, React Components,and React Hooks,
- Use of axios get request, to fetch data from API to front,
- Using Postman, Insomnia for API testing,

## Future Features

Some of the extra features to implement in the future are:

- Show recommendations based on the movies selected.
- Make the application dynamic on all devices (mobiles, pads and larger screens).
- Adding a sort feature on the result page.
- Implement a paginations feature to show more movies.
