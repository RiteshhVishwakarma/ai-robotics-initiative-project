import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Student Benefits', id: 'student-benefits' },
    { label: 'University Benefits', id: 'university-benefits' },
    { label: 'Team', id: 'team' },
    { label: 'Mentors', id: 'mentors' },
    { label: 'R&D', id: 'research' }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">AI × Robotics Initiative</span>
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToSection('join')}
              className="btn btn-primary nav-cta"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
