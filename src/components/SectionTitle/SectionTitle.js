import React from 'react';
import './SectionTitle.css';

function SectionTitle({ children, classPlus }) {
  return (
    <div className={`section-title section-title_${classPlus}`}>
      <h2 className='section-title__title'>
        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;
