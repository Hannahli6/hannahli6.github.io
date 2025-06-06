import React from "react";
import "./project.css";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import DecorDots from "../decorDots/DecorDots.jsx";

const Project = () => {
  return (
    <div className="project">
      <SectionTitle section="Projects" />
      <DecorDots colour={"deepRed"}/>
      <div className="project-content">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
