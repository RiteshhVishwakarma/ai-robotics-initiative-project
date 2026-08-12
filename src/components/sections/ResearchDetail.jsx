import { researchDomains } from '../../data/research';
import './ResearchDetail.css';

const ResearchDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <section className="research-detail-section">
      <div className="container">
        {/* Back Button */}
        <button onClick={onBack} className="back-button" aria-label="Back to research list">
          ← Back to Research & Experiments
        </button>

        {/* Project Header */}
        <div className="research-detail-header">
          <div className="research-detail-meta">
            <span 
              className="research-detail-domain"
              style={{ color: researchDomains[project.domain] }}
            >
              {project.domain}
            </span>
            <span 
              className="research-detail-status"
              data-status={project.status.toLowerCase().replace(' ', '-')}
            >
              {project.status}
            </span>
          </div>
          <h1 className="research-detail-title">{project.title}</h1>
          <p className="research-detail-summary">{project.summary}</p>
        </div>

        {/* Project Content */}
        <div className="research-detail-content">
          
          {/* Objective */}
          {project.objective && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Problem / Objective</h2>
              <p className="research-detail-text">{project.objective}</p>
            </div>
          )}

          {/* Approach */}
          {project.approach && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Approach</h2>
              <p className="research-detail-text">{project.approach}</p>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Technologies / Components</h2>
              <div className="research-detail-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Implementation */}
          {project.implementation && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Implementation</h2>
              <p className="research-detail-text">{project.implementation}</p>
            </div>
          )}

          {/* Results */}
          {project.results && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Results / Observations</h2>
              <p className="research-detail-text">{project.results}</p>
            </div>
          )}

          {/* Media Section */}
          {((project.images && project.images.length > 0) || 
            (project.videos && project.videos.length > 0) ||
            project.demoUrl ||
            project.githubUrl) && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Media & Links</h2>
              <div className="research-detail-links">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Future Work */}
          {project.futureWork && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Future Work</h2>
              <p className="research-detail-text">{project.futureWork}</p>
            </div>
          )}

          {/* Contributors */}
          {project.contributors && project.contributors.length > 0 && (
            <div className="research-detail-section-block">
              <h2 className="research-detail-heading">Contributors</h2>
              <div className="research-detail-contributors">
                {project.contributors.map((contributor, index) => (
                  <div key={index} className="contributor-card">
                    <h3 className="contributor-name">{contributor.name}</h3>
                    <p className="contributor-info">
                      {contributor.branch} • {contributor.year}
                    </p>
                    <p className="contributor-contribution">
                      {contributor.contribution}
                    </p>
                    {(contributor.github || contributor.linkedin) && (
                      <div className="contributor-links">
                        {contributor.github && (
                          <a 
                            href={contributor.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contributor-link"
                          >
                            GitHub
                          </a>
                        )}
                        {contributor.linkedin && (
                          <>
                            {contributor.github && <span className="link-divider">•</span>}
                            <a 
                              href={contributor.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="contributor-link"
                            >
                              LinkedIn
                            </a>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Back to List Button */}
        <div className="research-detail-footer">
          <button onClick={onBack} className="btn btn-outline">
            ← Back to All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchDetail;
