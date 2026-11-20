
import Navbar from './components/Navbar';
import RoleAnimation from './components/RoleAnimation';
import About from './components/About';

import './App.css';
import techImage from './assets/tech-workspace.png';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Vignesh Jagadeesan</span>
          </h1>

          <RoleAnimation />

          <p className="hero-description">
            I build modern web applications using Java,
            Spring Boot, React.js and MySQL.
            Passionate about developing efficient
            and user-friendly software solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="/Vignesh_Jagadeesan_Resume.pdf"
              download
              className="secondary-btn"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img src={techImage} alt="Technology workspace" />
        </div>

      </section>

      {/* ABOUT SECTION */}
      <About />

    
  <Skills />

  <Projects />

  <Contact />

    </>
  );
}

export default App;
