import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';

function AboutProject() {
    return (
        <section className="about-project" id='about-project'>
            <Container>
                <SectionTitle
                    classPlus='about-project'>О проекте</SectionTitle>
                <ul className='about-project__columns'>
                    <li className='about-project__column'>
                        <h3 className='about-project__column_title'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className='about-project__column_text'>
                            Составление плана, работу над бэкендом, вёрстку, 
                            добавление функциональности и финальные доработки.
                        </p>
                    </li>
                    <li className='about-project__column'>
                        <h3 className='about-project__column_title'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className='about-project__column_text'>
                            У каждого этапа был мягкий и жёсткий дедлайн, 
                            которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </li>
                </ul>
                <div className='about-project__periods'>
                    <h3 className='about-project__periods_title'>1 неделя</h3>
                    <h3 className='about-project__periods_title about-project__periods_title_dark'>4 недели</h3>
                    <p className='about-project__periods_text'>Back-end</p>
                    <p className='about-project__periods_text'>Front-end</p>
                </div>
            </Container>
        </section>
    );
}

export default AboutProject;