import './Research.css';

const Research = () => {
  return (
    <>
      <section id="research" className="section">
        <div className="container">
          <h2 className="section-title">Research & Development</h2>
          <div className="research-content">
            <div className="research-empty-state">
              <p className="research-message">
                Research & Development will be documented here as the team begins its work.
              </p>
              <div className="research-future">
                <h3 className="research-future-title">Future Content Areas</h3>
                <ul className="research-list">
                  <li>Research documentation</li>
                  <li>Experiments and prototypes</li>
                  <li>Technical reports</li>
                  <li>Open-source contributions</li>
                  <li>Publications, if any</li>
                </ul>
              </div>
            </div>
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
              Open-source projects will be listed here as they are developed and released.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
