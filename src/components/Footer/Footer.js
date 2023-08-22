import React from 'react';
import './Footer.css';
import Container from '../Container/Container';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer">
            <Container>
                <p className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__copyright'>
                    <p className='footer__text footer__text_year'>© {year}</p>
                    <div className='footer__links'>
                        <a
                            href='https://practicum.yandex.ru/'
                            className='footer__text'
                            rel="noreferrer"
                            target="_blank">
                                Яндекс.Практикум
                        </a>
                        <a
                            href='https://github.com/'
                            className='footer__text'
                            rel="noreferrer"
                            target="_blank">
                                Github
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;