import React from 'react';
import './decorDots.css';

const DecorDots = ({colour, size}) => {
  return (
    <div className="decorDots">
      <div className="dot topLeft"  style={{ backgroundColor: `var(--${colour})`}} ></div>
      <div className="dot topRight"  style={{ backgroundColor: `var(--${colour})`}} ></div>
      <div className="dot botLeft"  style={{ backgroundColor: `var(--${colour})`}} ></div>
      <div className="dot botRight"  style={{ backgroundColor: `var(--${colour})`}} ></div>
    </div>
  );
};

export default DecorDots;