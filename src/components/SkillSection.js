import React from 'react';
import './SkillSection.css';
import html from "../assets/html-logo.png"
import css from '../assets/css-logo.png'
import javascript from '../assets/javascript-logo.png'
import react from '../assets/react-logo.png'
import bootstrap from '../assets/bootstrap-logo.png'
import tailwind from '../assets/tailwind-logo.png'
import python from '../assets/python-logo.png'
import Figma from '../assets/figma-logo.png'
import PostgreSQL from '../assets/postgreSQL-logo.png'
import canva from '../assets/canva-logo.png'

const SkillSection = () => {
  const skills = [
    { name: 'HTML', description: 'Hypertext Markup Language', logo: html },
    { name: 'CSS', description: 'Cascading Style Sheets', logo: css },
    { name: 'JavaScript', description: 'Programming language for the web', logo: javascript },
    { name: 'ReactJS', description: 'JavaScript library for building user interfaces', logo: react },
    { name: 'BootStrap', description: 'Front-end framework', logo: bootstrap },
    { name: 'Tailwind', description: 'Utility-first CSS framework', logo: tailwind },
    { name: 'Python', description: 'General-purpose programming language', logo: python },
    { name: 'Figma', description: 'Design and prototyping tool', logo: Figma },
    { name: 'PostgreSQL', description: 'Open source relational database', logo: PostgreSQL },
    { name: 'Canva', description: 'Design and prototyping tool', logo: canva },
  ];

  return (
    <div className="skill-section">
      <h2>Tech Stack</h2>
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
