import React from 'react';
import './Profile.css';
import Navigation from '../Navigation/Navigation';

function Profile() {
    return (
        <section className="profile">
            <Navigation/>
            <div className='profile__date'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form
                    className='profile__form'
                    name='profile-form'>
                    <div className='profile__form-group'>
                    <input
                        className='profile__input'
                        name="name"
                        type='text'
                        id='register__name'
                        required
                        minLength={2}
                        maxLength={40}
                        placeholder='Имя'
                        pattern='[A-Za-zа-яА-ЯёЁ0-9-\s]{2,40}' />
                        <p className='profile__errors'></p>
                        <label htmlFor="profile__name" className="form__label form__label_name">Имя</label>
                        <input
                        className='profile__input profile__input_last'
                        name="email"
                        type='text'
                        id='register__email'
                        required
                        minLength={2}
                        maxLength={40}
                        placeholder='E-mail'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />
                        <p className='profile__errors profile__errors_email'></p>
                        <label htmlFor="profile__email" className="form__label form__label_email">E-mail</label>
                    </div>
                    <button
                        className='profile__button profile__button_submit'
                        type='submit'>
                        Редактировать
                    </button>
                </form>
                <button className='profile__button profile__button_exit-profile' type='button'>Выйти из профиля</button>
            </div>
        </section>
    );
}

export default Profile;
