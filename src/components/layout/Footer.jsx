import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">AI × Robotics Initiative</h3>
            <p className="footer-text">
              Building the next generation of AI & Robotics engineers at Ajeenkya DY Patil University, Pune.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text text-tertiary">
              Ajeenkya DY Patil University<br />
              Pune, Maharashtra
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-tertiary">
            © {new Date().getFullYear()} AI × Robotics Initiative. Student-led engineering initiative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
