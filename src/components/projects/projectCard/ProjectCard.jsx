import React from "react";
import { Link } from "lucide-react";
import "./projectCard.css";

const ProjectCard = ({
  title,
  desc,
  imageLink,
  skillTags,
  githubLink,
  websiteLink,
  devpostLink,
}) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="projectCard"
      onClick={() => {
        window.open(websiteLink ? websiteLink : githubLink, "_blank");
      }}
    >
      <div className="project-image-wrapper">
        <img
          src={`/img/projectImage/${imageLink}`}
          className="project-image"
        ></img>
      </div>
      <h4 className="project-title no-border-style">{title}</h4>
      <div className="project-info">
        <p>{desc}</p>
        <div className="skillTags ">
          {skillTags.map((tag, index) => (
            <h6 className="skillTag no-border-style" key={index}>
              {tag}
            </h6>
          ))}
        </div>
        <div className="projectLinks">
          {githubLink && (
            <div className="link" onClick={stopPropagation}>
              <Link size={16} strokeWidth={3} />
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          )}
          {devpostLink && (
            <div className="link" onClick={stopPropagation}>
              <Link size={16} strokeWidth={3} />
              <a href={devpostLink} target="_blank" rel="noopener noreferrer">
                Devpost
              </a>
            </div>
          )}
          {websiteLink && (
            <div className="link" onClick={stopPropagation}>
              <Link size={16} strokeWidth={3} />
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
