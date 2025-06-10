import React from "react";
import "./projects.css";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import DecorDots from "../decorDots/DecorDots.jsx";
import projects from "../projectData.json";

const Projects = () => {
  return (
    <div className="projects">
      <SectionTitle section="Projects" />
      <DecorDots colour={"deepRed"} />
      <div className="projects-content">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            imageLink={project.imageLink}
            skillTags={project.skillTags}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            devpostLink={project.devpostLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
