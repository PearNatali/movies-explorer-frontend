import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import MenuLink from '../MenuLink/MenuLink';
import Container from '../Container/Container';

function Header(props) {
  return (
    <header className={`header ${props.class}`}>
      <Container>
        <div className='header__container'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='логотип сайта' /> 
          </Link>
          <div className='header__nav'>
            <MenuLink
              text='Регистрация'
              route='/signup'
              class='register' />
              <MenuLink
              text='Войти'
              route='/signin'
              class='login' />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;