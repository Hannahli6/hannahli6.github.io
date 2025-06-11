import React from 'react';
import './iconSet.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import socialMediaLinks from "../socialMediaLinks.json"

const IconSet = ({size}) => {
  return (
    <div className={`iconSet ${size}`}>
      <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
      <a href={`mailto:${socialMediaLinks.email}`}><MdEmail/></a>
      <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
    </div>
  );
};

export default IconSet;

