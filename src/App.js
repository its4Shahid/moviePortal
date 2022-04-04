import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store/createStore';
import Header from './views/Header';
import Movies from './views/Movies';
import Search from './views/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TVShows from './views/TVShows';
import People from './views/People';
import TVShowDetail from './views/TVShowDetail';
import MovieDetail from './views/MovieDetail';
import PeopleDetail from './views/PeopleDetail/PeopleDetail';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/movies" element={<Movies />}></Route>
                    <Route exact path="/tvshows" element={<TVShows />}></Route>
                    <Route exact path="/people" element={<People />}></Route>
                    <Route exact path="/tvShows/details/:id" element={<TVShowDetail />}></Route>
                    <Route exact path="/movie/detail/:id" element={<MovieDetail />}></Route>
                    <Route exact path="/people/detail/:id" element={<PeopleDetail />}></Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
