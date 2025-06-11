import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Hobby from "./components/hobby/Hobby";
import Projects from "./components/projects/Projects";
import "./index.css";
import IconSet from "./components/iconSet/IconSet";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Element name="navbar">
        <Navbar />
      </Element>
      <Element name="landing">
        <Landing />
      </Element>
      <div className="main">
        <Element name="aboutMe">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="hobbyArt">
          <Hobby />
        </Element>
      </div>
      <footer className="footer">
        <div className="top-footer">
          <Link
            className="scroll-to-top-img"
            to="navbar"
            smooth={true}
            duration={100}
          >
            <img src="/img/bunny.png"></img>
          </Link>
          <IconSet size={""} />
          <div className="footer-text">
            <h5 className="no-border-style">© 2025 hannahli6.github.io</h5>
            <h5 className="no-border-style">Connect With Me!</h5>
          </div> 
        </div>
        <div className="bot-footer"></div>
      </footer>
    </div>
  );
}

export default App;
