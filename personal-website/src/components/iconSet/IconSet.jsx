import React from 'react';
import './iconSet.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const IconSet = ({size}) => {
  return (
    <div className={`iconSet ${size}`}>
      <button><FaGithub/></button>
      <button><FaLinkedin/></button>
      <button><MdEmail/></button>
      <button><FaInstagram/></button>
    </div>
  );
};

export default IconSet;
