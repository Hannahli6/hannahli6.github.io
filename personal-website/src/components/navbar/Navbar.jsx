import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const displayNavMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <img src='./img/profileCircle.png'></img>
      <div className={`page-links menu ${toggle ? 'active' : ''}`}>
        <button>About me</button>
        <button>Experience</button>
        <button>Projects</button>
        <button>Hobby & Art</button>
      </div>
      <button className='menuBar' onClick={displayNavMenu}>🍔</button>
    </div>
  );
};

export default Navbar;
