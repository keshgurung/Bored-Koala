import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import JokeList from './pages/JokeList'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import SingleMovie from './pages/SingleMovie'

// no switch in route@v6 replaced by route and component replaced by element

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            {/* <Route path='/register' component={Register} />  old way of expressing reacr route */}

            <Route path='/joke' element={<JokeList />} />
            <Route path='/movies/:imdbID' element={<SingleMovie />} />
            <Route path='/movies' element={<MovieList />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
