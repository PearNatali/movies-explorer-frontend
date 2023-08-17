import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoreMovies from "../MoreMovies/MoreMovies";

function Movies() {
    return (
        <section className='movies'>
            <Navigation/>
            <SearchForm />
            <MoviesCardList/>
            <MoreMovies/>
            <Footer/>
        </section>
    );
}

export default Movies;
