
import { ExternalLink, Code2 } from 'lucide-react';

function Projects() {

  const projects = [
    {
      title: 'JobGraph',
      category: 'Full Stack Web Application',
      description:
        'A job platform designed to connect job seekers with opportunities. Developed using Java, Spring Boot, React and MySQL with REST API integration.',
      technologies: [
        'Java',
        'Spring Boot',
        'React.js',
        'MySQL',
        'REST API'
      ],
      github: 'https://github.com/vignesh060/jobgraph',
      available: true
    },
    {
      title: 'Student Management System',
      category: 'Backend Development',
      description:
        'A student management application featuring CRUD operations, data validation and database integration using Spring Boot and MySQL.',
      technologies: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'JPA',
        'MySQL'
      ],
      github: null,
      available: false
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <p className="section-subtitle">
          MY RECENT WORK
        </p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Some applications I've developed using modern technologies.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-top">

              <div className="project-icon">
                <Code2 size={30} />
              </div>

              <span className="project-number">
                0{index + 1}
              </span>

            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">

              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}

            </div>

            <div className="project-actions">

              {project.available ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <span className="github-text">GH</span>
GitHub
<ExternalLink size={15} />
                </a>
              ) : (
                <span className="project-private">
                  
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
