import React from 'react';
import './sectionTitle.css';

const SectionTitle = ({section}) => {
  return (
    <div className="sectionTitleWrapper">
      <h3 className='sectionTitle'>{section}</h3>
    </div>
  );
};

export default SectionTitle;
