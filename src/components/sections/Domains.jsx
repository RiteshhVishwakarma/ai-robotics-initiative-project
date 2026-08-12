import { domains } from '../../data/content';
import './Domains.css';

const Domains = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Interdisciplinary Structure</h2>
        <p className="section-subtitle">
          Different engineering domains working together to build integrated systems
        </p>
        <div className="domains-grid">
          {domains.map((domain) => (
            <div key={domain.id} className="domain-card">
              <div className="domain-icon">{domain.icon}</div>
              <h3 className="domain-title">{domain.title}</h3>
              <p className="domain-description">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
