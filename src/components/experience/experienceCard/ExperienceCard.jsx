import React from "react";
import "./experienceCard.css";
import Skill from "../../skill/Skill.jsx";
import DecorDots from "../../decorDots/DecorDots";
import { Link } from "lucide-react";

const ExperienceCard = ({
  role,
  company,
  workType,
  startDate,
  endDate,
  description,
  links,
  skills,
}) => {
  return (
    <div className="experience-card">
      <div className="work-duration">
        <h5>
          {startDate}-{endDate}
        </h5>
      </div>
      <div className="work-details">
        <DecorDots colour={"deepBlue"} />
        <div className="work-type-tag">
          <h5>{workType}</h5>
        </div>
        <div className="experience-title-wrapper">
          <h4 className="experience-title">{role}</h4>
          <div className="horizontal-line"></div>
        </div>
        <h5>{company}</h5>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="skills">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
        <div className="links">
          {links.map((link, index) => (
            <div key={index} className="link">
              <Link size={16} strokeWidth={3} />
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link.startsWith("https://" || "www.") ? link.replace("https://", "") : link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
