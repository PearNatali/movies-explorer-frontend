import React from 'react';
import './AboutMe.css';
/* import aboutMePhoto from '../../images/aboutMePhoto.png'; */
import vitalik from "../../images/vitalik.png"
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <Container>
                <SectionTitle
                    classPlus='about-me'>Студент</SectionTitle>
                <div className='about-me__card'>
                    <div className='about-me__text-container'>
                        <h2 className='about-me__name'>{/* Наталья */}Виталий</h2>
                        <h3 className='about-me__age'>{/* Фронтенд-разработчик, 26 лет */}Фронтенд-разработчик, 30 лет</h3>
                        <p className='about-me__text'>{/* Я родилась на Русском Севере – в г.Архангельск. В этом городе закончила
                        бакалавриат по специальности промышленное гражданское строительство. Магистратуру
                        заканчивала в г.Санкт-Петербург в 2020 году, после чего и живу здесь по сей день.
                        Работаю ведущим инженером отдела капитального строительства в Государственном Эмритаже,
                        строим Фондохранилище. В сводобное время занимаюсь туризмом, хожу в походы – с больним рюкзаком
                        и как можно дальше, люблю созерцать природу. Также занимаюсь скалолазанием – это
                        своего рода борьба, оттдушина. Благодрая большому количеству знакомых разработчиков -
                        скалолазов с 14 февраля 2022 года начала кодить,
                        чем и занимаюсь по сей день. */}Я родился и живу в Саратове,
                        закончил факультет экономики СГУ. У меня есть жена и дочь. Я
                        люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл
                         курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
                          постоянной работы. </p>
                        <a
                            className='about-me__github'
                            href='https://github.com/PearNatali'
                            rel="noreferrer"
                            target="_blank">
                                Github
                        </a>
                    </div>
                    <img className='about-me__photo' src={vitalik} alt='фото автора сайта' />
                </div>
            </Container>
        </section>
    );
}

export default AboutMe;
