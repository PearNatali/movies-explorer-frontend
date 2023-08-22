import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__heading'>
                    Учебный проект студента факультета<br></br>
                    Веб-разработки.
                </h1>
                <div className='promo__novigation'>
                    <NavTab/>
                </div>
            </div>
        </section>
    );
}

export default Promo;