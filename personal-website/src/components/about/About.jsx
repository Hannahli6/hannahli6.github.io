import React from "react";
import "./about.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import IconSet from "../iconSet/IconSet";
import Skill from "../skill/Skill";
import DecorDots from "../decorDots/DecorDots";

const About = () => {
  return (
    <div className="about">
      <SectionTitle section="About Me" />
      <DecorDots colour="deepPink" />
      <div className="about-content">
        <div className="profile-card">
          <div className="profile">
            <img src="/img/profile.png" className="profile" alt="Profile" />
            <img src="/img/profileCircle.png" className="profile-bg" />
          </div>
          <h2>Hannah Li</h2>
          <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
           <h4>Resume</h4>
          </a>
          <IconSet size="small" />
        </div>
        <div className="description">
          <ul className="no-border-style">
            <li>
              <h4 className="no-border-style">
                2nd Year Statistics Major At University of British Columbia in
                Vancouver
              </h4>
            </li>
            <li>
              <h4 className="no-border-style">
                I have a passion for web development, data science and art!
              </h4>
            </li>
            <li>
              <h4 className="no-border-style">I also like to cook and bake on my free time!</h4>
            </li>
          </ul>
          <div className="skills-title">
            <h4>Skills</h4>
          </div>
          <div className="skills-wrapper">
            <div className="skills">
              <Skill skill="REACT" />
              <Skill skill="JAVASCRIPT" />
              <Skill skill="HTML" />
              <Skill skill="CSS" />
              <Skill skill="FIGMA" />
              <Skill skill="NODE.JS" />
              <Skill skill="R" />
            </div>
            <DecorDots colour="orange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
