import { studentBenefits, universityBenefits } from '../../data/content';
import './Benefits.css';

const Benefits = () => {
  return (
    <>
      <section id="student-benefits" className="section">
        <div className="container">
          <h2 className="section-title">Student Benefits</h2>
          <div className="benefits-grid">
            {studentBenefits.map((benefit) => (
              <div key={benefit.id} className="benefit-card">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="university-benefits" className="section">
        <div className="container">
          <h2 className="section-title">University Benefits</h2>
          <div className="benefits-grid">
            {universityBenefits.map((benefit) => (
              <div key={benefit.id} className="benefit-card">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
