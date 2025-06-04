import React from 'react';
import './landing.css';
import IconSet from '../iconSet/IconSet';

const Landing = () => {
  return (
    <div className="landing">
      <div className='name'>
        <h4>Hello! I'm </h4>
        <div className='line left'></div>
        <h1>HANNAH LI</h1>
        <div className='line right'></div>
      </div>
      <IconSet />
    </div>
  );
};

export default Landing;