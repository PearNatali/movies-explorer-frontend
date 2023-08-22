import React from 'react';
import { Link } from 'react-router-dom'
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg';
import submitIcon from '../../images/search-submit-button.svg';
import search from '../../images/search.svg';

function SearchForm()  {
	return (
		<form className='search-form'>
			<div className='search-form__container'>
				<div className='search-form__label-search'>
					<img className='search-icon' src={search} alt='лупа поиска'/>
					<input
						className='search-form__input'
						type='text'
						id='movie-input'
						placeholder='Фильм'
						required />
				</div>
				<div className='search-form__button'>
					<Link to='/movies'>
						<button className='search-form__submit' type='submit'><img src={submitIcon} alt='кнопка поиска'/></button>
					</Link>
					<img className='search-form__filter' src={searchIcon} alt='кнопка фильтра'/>
					<span className='search-form__filter-title' >Короткометражки</span>
				</div>
			</div>
			<div className='filter-container'>
				<img className='search-form__filter search-form__filter_active' src={searchIcon} alt='кнопка фильтра'/>
				<span className='search-form__filter-title search-form__filter-title_active' >Короткометражки</span>
			</div>
		</form>
	);
}

export default SearchForm;
