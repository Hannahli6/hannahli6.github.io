import React from "react";
import "./experienceCard.css";
import Skill from "../../skill/Skill.jsx";
import DecorDots from "../../decorDots/DecorDots";

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <div className="work-duration">
        <h5>Jun 2022 - Aug 2022</h5>
      </div>
      <div className="work-details">
        <DecorDots colour={"deepBlue"} />
        <div className="work-type-tag">
          <h5>Volunteer Experience</h5>
        </div>
        <div className="experience-title-wrapper">
          <h4 className="experience-title">YHY Volunteer Web Developer</h4>
          <div className="horizontal-line"></div>
        </div>
        <h5>Company Name</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          molestie mauris dui, fermentum feugiat dolor pharetra quis. Maecenas
          feugiat dignissim nibh, et vehicula massa viverra vel. Vestibulum eget
          nibh blandit.
        </p>
        <div className="skills">
          <Skill skill="JAVASCRIPT">JavaScript</Skill>
          <Skill skill="REACT">React</Skill>
          <Skill skill="NODE.JS">Node.js</Skill>
          <Skill skill="HTML">HTML</Skill>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
