import About from './components/about/About';
import Experience from './components/experience/Experience';
import Hobby from './components/hobby/Hobby';
import Project from './components/projects/Project';
import './index.css';

function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Project />
      <Hobby />
    </div>
  );
}

export default App;
