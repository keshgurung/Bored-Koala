import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import JokeList from './pages/JokeList'
import Home from './pages/Home'
import JokeList from './pages/JokeList'

// no switch in route@v6 replaced by route and component replaced by element

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            {/* <Route path='/register' component={Register} />  old way of expressing reacr route */}

            <Route path='/' element={<Home />} />
            <Route path='/jokelist' element={<JokeList />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
