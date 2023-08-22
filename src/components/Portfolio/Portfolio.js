import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <p className='portfolio__heading'>Портфолио</p>
                <div className='portfolio__projects'>
                    <a
                        className='portfolio__project'
                        href='https://github.com/PearNatali/how-to-learn-1-'
                        rel="noreferrer"
                        target="_blank">
                        <p className='portfolio__project_title'>Статичный сайт</p>
                        <p className='portfolio__projects_arrow'>↗</p>
                    </a>
                    <a
                        className='portfolio__project'
                        href='https://github.com/PearNatali/russian-travel/blob/main/index.html'
                        rel="noreferrer"
                        target="_blank">
                        <p className='portfolio__project_title portfolio__project_title_two'>Адаптивный сайт</p>
                        <p className='portfolio__projects_arrow portfolio__projects_arrow_two'>↗</p>
                    </a>
                    <a
                        className='portfolio__project portfolio__project_border'
                        href='https://pearnatali.nomoredomains.rocks'
                        rel="noreferrer"
                        target="_blank">
                        <p className='portfolio__project_title portfolio__project_title_three'>Одностраничное приложение</p>
                        <p className='portfolio__projects_arrow portfolio__projects_arrow_three'>↗</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
