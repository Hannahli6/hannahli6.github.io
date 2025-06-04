import React from "react";
import "./about.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import IconSet from "../iconSet/IconSet";

const About = () => {
  return (
    <div className="about">
      <SectionTitle section="About Me" />
      <div className="about-content">
        <div className="profile-card">
          <img src="/img/profileCircle.png"></img>
          <h2>Hannah Li</h2>
          <button className="resume-btn">Resume</button>
          <IconSet size="small" />
        </div>
        <div className="description">
          <span>
            - 2nd Year Statistics Major At University of British Columbia in
            Vancouver <br />
            - I have a passion for web development, data science and
            art! <br />
            - I also like to cook and bake on my free time!<br />
          </span>
          <div className="skills-title">
            <h4>Skills</h4>
          </div>
          <div className="skills"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
