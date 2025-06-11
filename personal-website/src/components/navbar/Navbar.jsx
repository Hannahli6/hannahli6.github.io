import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const displayNavMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <img src='./img/profileCircle.png' alt="Profile"></img>
      <div className={`page-links menu ${toggle ? 'active' : ''}`}>
        <Link to="aboutMe" smooth={'easeInOutQuad'} duration={500} offset={-100}>
          <button>About me</button>
        </Link>
        <Link to="experience" smooth={'easeInOutQuad'} duration={500} offset={-100}>
          <button>Experience</button>
        </Link>
        <Link to="projects" smooth={'easeInOutQuad'} duration={500} offset={-100}>
          <button>Projects</button>
        </Link>
        <Link to="hobbyArt" smooth={'easeInOutQuad'} duration={500} offset={-100}>
          <button>Hobby & Art</button>
        </Link>
      </div>
      <button className='menuBar' onClick={displayNavMenu}>🍔</button>
    </div>
  );
};

export default Navbar;