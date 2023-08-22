import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import headerMenu from '../../images/headerMenu.svg';
import MenuPopup from "../MenuPopup/MenuPopup";
import './Navigation.css';
import AccountButton from "../AccountButton/AccountButton";

function Navigation(props) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    function handleClickBurgerMenu() {
      setIsOpenMenu(true);
    }
    function closeMenu() {
      setIsOpenMenu(false);
    }
    return(
        <section className='navigation'>
            <div className='navigation__container'>
                <Link to='/'>
                    <div className='register__logo'>
                        <img className='register__icon' src={logo} alt='логотип сайта' />
                    </div>
                </Link>
                <MenuPopup
                isOpen={isOpenMenu}
                onClose={closeMenu} />
                <div className='navigation__container-movies'>
                    <Link to='/movies' className='navigation__movies'>
                        Фильмы
                    </Link>
                    <Link to='/saved-movies' className='navigation__movies-saved'>
                        Сохраненные фильмы
                    </Link>
                </div>
            </div>
            <AccountButton
                classPlus={'nav'}/>
            <div className='navigation__menu' onClick={handleClickBurgerMenu}>
                <img className='navigation__menu-burger' src={headerMenu} alt='меню профиля'/>
            </div>
        </section>
    )
}

export default Navigation