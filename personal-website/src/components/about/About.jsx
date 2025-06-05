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
          <img src="/img/profileCircle.png"></img>
          <h2>Hannah Li</h2>
          <button className="resume-btn">Resume</button>
          <IconSet size="small" />
        </div>
        <div className="description">
          <ul>
            <li>
              <span>
                2nd Year Statistics Major At University of British Columbia in
                Vancouver
              </span>
            </li>
            <li>
              <span>
                I have a passion for web development, data science and art!
              </span>
            </li>
            <li>
              <span>I also like to cook and bake on my free time!</span>
            </li>
          </ul>
          <div className="skills-title">
            <h4>Skills</h4>
          </div>
          <div className="skills-wrapper">
            <DecorDots colour="orange" />
            <div className="skills">
              <Skill skill="REACT" />
              <Skill skill="JAVASCRIPT" />
              <Skill skill="HTML" />
              <Skill skill="CSS" />
              <Skill skill="FIGMA" />
              <Skill skill="NODE.JS" />
              <Skill skill="R" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
