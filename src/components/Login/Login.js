import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <section className="register">
            <div className='register__logo'>
                <Link to='/'>
                    <img className='register__icon' src={logo} alt='логотип сайта' />
                </Link>
            </div>
            <h2 className='register__title'>Рады видеть!</h2>
            <form className='register__form' name='login-form'>
                <label htmlFor="register__email" className="register__label">E-mail</label>
                <input
                    className='register__input'
                    name="email"
                    type='text'
                    id='login__email'
                    required
                    minLength={2}
                    maxLength={40}
                    placeholder='E-mail'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />
                <label htmlFor="register__password" className="register__label">Пароль</label>
                <input
                    className='register__input'
                    name="password"
                    type='password'
                    id='login__password'
                    required
                    minLength={2}
                    maxLength={40}
                    placeholder='Пароль'
                    pattern="[\w]{2,40}$"/>
                <Link to='/profile' className='register__submit' type='submit'>
                    Войти
                </Link>
            </form>
            <p className='register__signin'>Ещё не зарегистрированы?
                <Link to='/signup' className='register__link'>
                    Регистрация
                </Link>
            </p>
        </section>
    );
}

export default Login;
