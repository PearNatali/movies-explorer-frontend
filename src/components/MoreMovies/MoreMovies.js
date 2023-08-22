import React from 'react';
import { Link } from 'react-router-dom';
import './MoreMovies.css';

function MoreMovies(props) {

    return (
        <Link to='/movies'>
            <div className='more-movies'>
                <button
                    className='more-movies__button'>
                    Ещё
                </button>
            </div>
        </Link>
    );
}

export default MoreMovies;