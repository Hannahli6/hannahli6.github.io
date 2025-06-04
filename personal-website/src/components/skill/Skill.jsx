import React from 'react';
import './skill.css';


const Skill = ({skill}) => {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={`/img/techStackIcons/${skill}.png`} alt={`${skill} icon`} />
      </div>
      <p>{skill}</p>
    </div>
  );
};

export default Skill;