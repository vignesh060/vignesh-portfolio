
import {
  Code2,
  Server,
  Database,
  Wrench,
  Braces,
  GitBranch
} from 'lucide-react';

function Skills() {

  const skillCategories = [
    {
      icon: <Server size={28} />,
      title: 'Backend Development',
      description: 'Building server-side applications and REST APIs.',
      skills: ['Java', 'Core Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'JDBC', 'REST API']
    },
    {
      icon: <Code2 size={28} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces.',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'JSX', 'Hooks']
    },
    {
      icon: <Database size={28} />,
      title: 'Database Management',
      description: 'Managing relational databases and writing efficient queries.',
      skills: ['MySQL', 'SQL', 'DBMS', 'Joins', 'Subqueries', 'Stored Procedures']
    },
    {
      icon: <Wrench size={28} />,
      title: 'Developer Tools',
      description: 'Tools and technologies used in daily development.',
      skills: ['Git', 'GitHub', 'Maven', 'Eclipse', 'VS Code', 'Postman']
    },
    {
      icon: <Braces size={28} />,
      title: 'Programming Concepts',
      description: 'Strong programming fundamentals and problem solving.',
      skills: ['OOP', 'Collections', 'Exception Handling', 'Multithreading', 'DSA']
    },
    {
      icon: <GitBranch size={28} />,
      title: 'Development Practices',
      description: 'Building maintainable and organized applications.',
      skills: ['REST Architecture', 'CRUD Operations', 'MVC Pattern', 'API Integration']
    }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <p className="section-subtitle">MY TECHNICAL EXPERTISE</p>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <p>
          Technologies and tools I use to build modern applications.
        </p>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-card-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <p className="skill-description">
              {category.description}
            </p>

            <div className="skill-tags">

              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;
