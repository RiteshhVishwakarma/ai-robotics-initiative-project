import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-content">
          <button 
            className="nav-logo" 
            onClick={() => scrollToSection('hero')}
            aria-label="Go to home"
          >
            <span className="logo-text">AI × Robotics Initiative</span>
          </button>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div 
            id="main-menu"
            className={`nav-menu ${isMenuOpen ? 'open' : ''}`}
            role="menu"
          >
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToSection('join')}
              className="btn btn-primary nav-cta"
              role="menuitem"
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
