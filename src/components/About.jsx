
import {
  Code2,
  Database,
  Server,
  GraduationCap,
  Terminal,
  Rocket
} from 'lucide-react';

function About() {

  const technologies = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'React.js, JavaScript, HTML5, CSS3 and Bootstrap'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, Spring MVC and REST APIs'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'MySQL, SQL, DBMS and Hibernate'
    },
    {
      icon: <Terminal size={24} />,
      title: 'Programming',
      description: 'Core Java, OOP, Collections and Data Structures'
    }
  ];

  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>Turning ideas into practical software solutions.</p>
      </div>

      <div className="about-container">

        <div className="about-info">

          <div className="about-icon">
            <GraduationCap size={35} />
          </div>

          <h3>Passionate Full Stack Developer</h3>

          <p>
            I'm Vignesh Jagadeesan, a software developer
            passionate about building modern, scalable
            and user-friendly web applications.
          </p>

          <p>
            I work with Java, Spring Boot, React.js
            and MySQL to develop full-stack applications.
            I enjoy solving programming challenges,
            learning new technologies and creating
            meaningful software solutions.
          </p>

          <div className="about-highlight">
            <Rocket size={20} />
            <span>Always learning. Always building.</span>
          </div>

        </div>

        <div className="technology-grid">

          {technologies.map((tech, index) => (

            <div className="technology-card" key={index}>

              <div className="technology-icon">
                {tech.icon}
              </div>

              <h4>{tech.title}</h4>

              <p>{tech.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;
