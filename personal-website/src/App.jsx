import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Hobby from './components/hobby/Hobby';
import Projects from './components/projects/Projects';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div className='main'>
        <About />
        <Projects />
        <Experience />
        {/* <Hobby /> */}
      </div>
    </div>
  );
}

export default App;
