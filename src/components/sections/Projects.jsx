import { projects, domainColors } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Introducing Projects</h2>
        <p className="section-subtitle">
          Introductory beginner/intermediate projects designed to build domain fundamentals before larger interdisciplinary projects
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span 
                  className="project-domain"
                  style={{ color: domainColors[project.domain] }}
                >
                  {project.domain}
                </span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="project-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
