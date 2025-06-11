import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const displayNavMenu = () => {
    setToggle(!toggle);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Set navbar height after mount
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > navbarHeight) {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, navbarHeight]);

  return (
    <div
      ref={navbarRef}
      className={`navbar ${showNavbar ? "navbar--visible" : "navbar--hidden"}`}
    >
      <img src="./img/profileCircle.png" alt="Profile"></img>
      <div className={`page-links menu ${toggle ? "active" : ""}`}>
        <Link
          to="aboutMe"
          smooth={"easeInOutQuad"}
          duration={500}
          offset={-100}
        >
          <button>About me</button>
        </Link>
        <Link
          to="experience"
          smooth={"easeInOutQuad"}
          duration={500}
          offset={-100}
        >
          <button>Experience</button>
        </Link>
        <Link
          to="projects"
          smooth={"easeInOutQuad"}
          duration={500}
          offset={-100}
        >
          <button>Projects</button>
        </Link>
        <Link
          to="hobbyArt"
          smooth={"easeInOutQuad"}
          duration={500}
          offset={-100}
        >
          <button>Hobby & Art</button>
        </Link>
      </div>
      <button className="menuBar" onClick={displayNavMenu}>
        🍔
      </button>
    </div>
  );
};

export default Navbar;
