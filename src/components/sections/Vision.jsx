import './Vision.css';

const Vision = () => {
  return (
    <section className="section vision-section">
      <div className="container">
        <h2 className="section-title">Long-Term Vision</h2>
        <div className="vision-content">
          <div className="vision-card vision-card-primary">
            <h3 className="vision-title">Future Direction</h3>
            <p className="vision-text">
              Build AI-powered systems that can see, understand, decide, and eventually act in the physical world.
            </p>
          </div>
          <div className="vision-card vision-card-secondary">
            <h3 className="vision-title">Current Reality</h3>
            <p className="vision-text">
              We are starting with small working prototypes and learning step-by-step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
