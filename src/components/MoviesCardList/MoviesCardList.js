import React from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import film1 from "../../images/film1.svg"
/* import Container from "../Container/Container" */

function MoviesCardList() {
    return (
            <section className="movies-list">
                <ul className='movies-list__list'>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                        <li className='movies-list-card'><MoviesCard
                            nameRU={'33 слова о дизайне'}
                            duration={'1ч 47м'}
                            image={film1}
                        /></li>
                    </ul>
  
            </section>
    )
};

export default MoviesCardList;