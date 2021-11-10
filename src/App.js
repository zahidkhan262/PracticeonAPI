import React, { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/Details';

// api=http://www.omdbapi.com/?i=tt3896198&apikey=b6becf9b

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [selectedMovie, setSelectedMovie] = useState([])
  // const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json()).then((result) => {
        setMovieList(result)
        console.log("get data from API", result)
      })
  }, []);



  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <Home
              movieList={movieList}
              setSelectedMovie={setSelectedMovie}
            />
          </Route>
          <Route exact path="/movie-details" >
            <Details selectedMovie={selectedMovie} />
          </Route>
          <Route exact path="/favourite">
            <Favourite selectedMovie={selectedMovie} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}



export default App;
