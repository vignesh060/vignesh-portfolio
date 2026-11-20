
import { useState, useEffect } from 'react';

function RoleAnimation() {

  const roles = [
    'Java Backend Developer',
    'Full Stack Developer',
    'React.js Developer',
    'Spring Boot Developer',
    'Software Engineer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="role-container">

      <h2 key={roleIndex} className="typing-role">
        {roles[roleIndex]}
      </h2>

      <span className="cursor">|</span>

    </div>
  );
}

export default RoleAnimation;
