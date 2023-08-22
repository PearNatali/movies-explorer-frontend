import React from 'react';
import './MenuPopup.css';
import MenuLink from '../MenuLink/MenuLink';
import AccountButton from "../AccountButton/AccountButton";

function MenuPopup(props) {
  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className='popup__close' alt='кнопка закрытия меню' onClick={props.onClose} />
          <nav className='popup__links'>
            <MenuLink
              text='Главная страница'
              route='/'
              class='movies'
              onClose={props.onClose} />
            <MenuLink
              text='Фильмы'
              route='/movies'
              class='movies'
              onClose={props.onClose} />
            <MenuLink
              text='Сохраненные фильмы'
              route='/saved-movies'
              class='movies'
              onClose={props.onClose} />
          </nav>
          <AccountButton
          classPlus={'popup'}/>
      </div>
      <div id="overlayProfile" onClick={props.onClose} className="popup__overlay"></div>
    </section>
  );
}

export default MenuPopup;
