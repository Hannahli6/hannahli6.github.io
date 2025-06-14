import React from "react";
import "./skill.css";

const Skill = ({ skill }) => {
  // make skill name CSP to clip studio paint
  const skillImgLink = `/img/techStackIcons/${skill}.png`;

  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={skillImgLink} alt={`${skill} icon`} />
      </div>
      <h6>{skill}</h6>
    </div>
  );
};

export default Skill;
