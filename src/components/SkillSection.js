import React from 'react';
import './SkillSection.css';

const SkillSection = () => {
  const skills = [
    { name: 'HTML', description: 'Hypertext Markup Language', logo: '/html-logo.png' },
    { name: 'CSS', description: 'Cascading Style Sheets', logo: '/css-logo.png' },
    { name: 'JavaScript', description: 'Programming language for the web', logo: '/javascript-logo.png' },
    { name: 'ReactJS', description: 'JavaScript library for building user interfaces', logo: '/react-logo.png' },
    { name: 'BootStrap', description: 'Front-end framework', logo: '/bootstrap-logo.png' },
    { name: 'Tailwind', description: 'Utility-first CSS framework', logo: '/tailwind-logo.png' },
    { name: 'Python', description: 'General-purpose programming language', logo: '/python-logo.png' },
    { name: 'Figma', description: 'Design and prototyping tool', logo: '/figma-logo.png' },
    { name: 'PostgreSQL', description: 'Open source relational database', logo: '/postgreSQL-logo.png' },
    { name: 'Canva', description: 'Design and prototyping tool', logo: '/canva-logo.png' },
  ];

  return (
    <div className="skill-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.name} />
            <div className="skill-details">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-description">{skill.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
