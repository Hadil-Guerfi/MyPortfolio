import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Technologie } from './components/Technologie';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe/>
      <Skills />
      <Technologie/>
      <Projects />
    </div>
  );
}

export default App;
