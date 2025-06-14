import React from "react";
import "./experience.css";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import DecorDots from "../decorDots/DecorDots.jsx";
import ExperienceCard from "./experienceCard/ExperienceCard.jsx";

const Experience = () => {
  return (
    <div className="experience section-bg">
      <SectionTitle section="Experience" />
      <DecorDots colour={"deepPurple"} />
      <div className="experience-content">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
