import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Hobby from "./components/hobby/Hobby";
import Projects from "./components/projects/Projects";
import "./index.css";
import IconSet from "./components/iconSet/IconSet";
import { Link, Element } from "react-scroll";
import FadeInAnimation from "./components/FadeInAnimation/FadeInAnimation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="landing">
        <Landing />
      </Element>
      <div className="main">
        <FadeInAnimation direction={"left"}>
          <Element name="aboutMe">
            <About />
          </Element>
        </FadeInAnimation>
        <FadeInAnimation direction={"right"}>
          <Element name="projects">
            <Projects />
          </Element>
        </FadeInAnimation>
        <FadeInAnimation direction={"left"}>
          <Element name="experience">
            <Experience />
          </Element>
        </FadeInAnimation>
        <FadeInAnimation direction={"right"}>
          <Element name="hobbyArt">
            <Hobby />
          </Element>
        </FadeInAnimation>
      </div>
      <footer className="footer">
        <div className="top-footer">
          <Link
            className="scroll-to-top-img"
            to="landing"
            smooth={true}
            duration={300}
            offset={-80}
            // 80px is the height of the navbar
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
