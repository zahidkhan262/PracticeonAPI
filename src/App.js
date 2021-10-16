import './App.css';
import React from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// export const API_KEY = 'b6becf9b';

// import { API_KEY } from '../App'

// useEffect(() => {
//     const fetchData = fetch('http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}').then((resp) => {
//       resp.json().then((finalResp) => {
//         console.log(finalResp);
//         setMovieList(resp.data.Search);
//       })
//     })
//   }, []);

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourite" component={Favourite} />
        </Switch>
      </Router>
    </>
  )
}



export default App;
