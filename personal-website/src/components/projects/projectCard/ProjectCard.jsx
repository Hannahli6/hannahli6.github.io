import React from "react";
import "./projectCard.css";

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <img src="/img/EmbrProject.png" className="project-image"></img>
      <div className="project-info">
        <h4 className="project-title">Embr NWHACKS 2025</h4>
        <p>
          Real-time global wildfire tracking platform with interactive map, air
          quality alerts, and displayed news related to the local wildfire,
          Integrated GPT-4o to generate nearby shelters and hospitals, and a
          HuggingFace LLM chatbot for user guidance assistance
        </p>
        <div className="skillTags">
          <span className="skillTag">React</span>
          <span className="skillTag">Javascript</span>
        </div>
        <div className="projectLinks">
          <div className="projectLink">
            {/* link icon */}
            <a href="">Github</a>
          </div>
          <div className="projectLink">
            {/* link icon */}
            <a href="">Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
