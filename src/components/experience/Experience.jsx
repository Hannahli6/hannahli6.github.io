import React from "react";
import "./experience.css";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import DecorDots from "../decorDots/DecorDots.jsx";
import ExperienceCard from "./experienceCard/ExperienceCard.jsx";
import experienceData from "../experienceData.json"; 

const Experience = () => {
  return (
    <div className="experience section-bg">
      <SectionTitle section="Experience" />
      <DecorDots colour={"deepPurple"} />
      <div className="experience-content">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            company={experience.company}
            workType={experience.workType}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            links={experience.links}
            skills={experience.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
