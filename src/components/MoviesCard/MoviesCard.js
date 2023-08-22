import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <section className="element">
            <div className="element__container">
                <div className="element__data">
                    <p className="element__name">{props.nameRU}</p>
                    <p className='element__time'>{props.duration}</p>
                </div>
                <div className="element__button">
                    <button className='element__saved element__saved_active'></button>
                    <button className="element__delete element__delete_active"></button>
                </div>
                <img
                    className="element__image"
                    src={props.image}
                    alt={props.nameRU}
                />
            </div>
        </section>

    );
};

export default MoviesCard;
