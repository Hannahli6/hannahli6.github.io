import React from 'react';
import './skill.css';

const Skill = ({skill}) => {
  return (
    <div className="skill">
      <button className="skill-btn">
      </button>
      <p>{skill}</p>
    </div>
  );
};

export default Skill;