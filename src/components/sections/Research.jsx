import { useState } from 'react';
import { researchProjects, researchDomains } from '../../data/research';
import ResearchDetail from './ResearchDetail';
import './Research.css';

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  // If a project is selected, show its detail page
  if (selectedProject) {
    return <ResearchDetail project={selectedProject} onBack={handleBackToList} />;
  }

  // Otherwise show the project listing
  return (
    <>
      <section id="research" className="section">
        <div className="container">
          <h2 className="section-title">Research & Experiments</h2>
          <p className="section-subtitle">
            Documenting completed and ongoing technical work, experiments, and prototypes built by the team
          </p>
          
          <div className="research-content">
            {researchProjects.length > 0 ? (
              <div className="research-grid">
                {researchProjects.map((project) => (
                  <div key={project.id} className="research-project-card">
                    <div className="research-project-header">
                      <span 
                        className="research-project-domain"
                        style={{ color: researchDomains[project.domain] }}
                      >
                        {project.domain}
                      </span>
                      <span 
                        className="research-project-status"
                        data-status={project.status.toLowerCase().replace(' ', '-')}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="research-project-title">{project.title}</h3>
                    <p className="research-project-summary">{project.summary}</p>
                    {project.contributors && project.contributors.length > 0 && (
                      <div className="research-project-contributors">
                        <span className="contributors-label">Contributors:</span>
                        <span className="contributors-count">
                          {project.contributors.length} {project.contributors.length === 1 ? 'student' : 'students'}
                        </span>
                      </div>
                    )}
                    <button 
                      onClick={() => handleProjectClick(project)}
                      className="btn btn-outline research-project-btn"
                    >
                      View Project
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="research-empty-state">
                <p className="research-message">
                  Research & experiments will be documented here as the team begins building and testing real systems.
                </p>
                <div className="research-future">
                  <h3 className="research-future-title">What Will Be Documented</h3>
                  <ul className="research-list">
                    <li>Completed projects with technical details</li>
                    <li>Ongoing experiments and prototypes</li>
                    <li>Technical approaches and results</li>
                    <li>Student contributor credits</li>
                    <li>Code repositories and demos</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Open Source</h2>
          <div className="opensource-content">
            <p className="opensource-text">
              Projects developed by the team may be released as open-source tools, libraries, or educational resources where appropriate.
            </p>
            <p className="opensource-note text-tertiary">
              Open-source repositories will be listed here as they are developed and released.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
