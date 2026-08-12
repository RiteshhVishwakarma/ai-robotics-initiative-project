import './Hero.css';

const Hero = () => {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building the Next Generation of<br />AI & Robotics Engineers
          </h1>
          <p className="hero-subtitle">
            We are building an interdisciplinary student engineering community where students learn by developing real-world AI, software, electronics, mechanical and robotics projects.
          </p>

          <div className="hero-cards">
            <div className="hero-card">
              <h3 className="hero-card-title">VISION</h3>
              <p className="hero-card-text">See → Understand → Decide → Act</p>
            </div>
            <div className="hero-card">
              <h3 className="hero-card-title">IMMEDIATE NEXT STEP</h3>
              <p className="hero-card-text">
                Build introductory projects across different engineering domains and form the core interdisciplinary team.
              </p>
            </div>
            <div className="hero-card">
              <h3 className="hero-card-title">EXPECTED MENTOR SUPPORT</h3>
              <p className="hero-card-text">
                Technical guidance, project feedback and domain expertise from faculty mentors.
              </p>
            </div>
          </div>

          <div className="hero-cta">
            <button onClick={scrollToJoin} className="btn btn-primary">
              Join the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
