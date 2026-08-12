import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Our Initiative</h2>
        <div className="about-content">
          <div className="about-philosophy">
            <h3 className="about-subtitle">Learn → Build → Collaborate → Demonstrate</h3>
            <p className="about-text">
              We believe in learning through practical implementation. Students work on real engineering tasks, not just tutorials.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <h4 className="about-card-title">Learn Fundamentals</h4>
              <p className="about-card-text">
                Build strong foundations in your engineering domain through structured learning and guided resources.
              </p>
            </div>
            <div className="about-card">
              <h4 className="about-card-title">Work on Practical Tasks</h4>
              <p className="about-card-text">
                Apply concepts to real projects, debugging actual problems and developing working solutions.
              </p>
            </div>
            <div className="about-card">
              <h4 className="about-card-title">Build Prototypes</h4>
              <p className="about-card-text">
                Develop tangible systems and prototypes that demonstrate engineering concepts in action.
              </p>
            </div>
            <div className="about-card">
              <h4 className="about-card-title">Document Your Work</h4>
              <p className="about-card-text">
                Maintain clear documentation, technical reports, and version control for all project work.
              </p>
            </div>
            <div className="about-card">
              <h4 className="about-card-title">Collaborate Across Branches</h4>
              <p className="about-card-text">
                Work with students from different engineering disciplines on integrated projects.
              </p>
            </div>
            <div className="about-card">
              <h4 className="about-card-title">Demonstrate Results</h4>
              <p className="about-card-text">
                Present working prototypes and systems that showcase your learning and capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
