import { recruitmentSteps, selectionCriteria } from '../../data/content';
import './Join.css';

const Join = () => {
  // Placeholder URL - to be replaced with actual recruitment form
  const RECRUITMENT_URL = "#recruitment-form-placeholder";

  return (
    <section id="join" className="section join-section">
      <div className="container">
        <h2 className="section-title">Join the Team</h2>
        <p className="section-subtitle">
          We are recruiting motivated 1st and 2nd year students passionate about AI, robotics, and engineering.
        </p>

        <div className="join-content">
          {/* Selection Flow */}
          <div className="join-subsection">
            <h3 className="join-subsection-title">Selection Process</h3>
            <div className="recruitment-steps">
              {recruitmentSteps.map((step, index) => (
                <div key={step.id} className="recruitment-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.step}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selection Criteria */}
          <div className="join-subsection">
            <h3 className="join-subsection-title">Selection Criteria</h3>
            <div className="selection-criteria">
              {selectionCriteria.map((criterion, index) => (
                <div key={index} className="criterion-item">
                  <span className="criterion-icon">✓</span>
                  <span className="criterion-text">{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="join-note">
            <p className="note-text">
              <strong>Important:</strong> Submitting the application form does not guarantee selection. Selection is based on technical task performance and overall evaluation.
            </p>
          </div>

          {/* CTA */}
          <div className="join-cta-section">
            <a 
              href={RECRUITMENT_URL} 
              className="btn btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
            <p className="cta-note text-tertiary">
              Recruitment link will be activated when the application process begins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
