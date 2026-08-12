import { mentors } from '../../data/team';
import './Mentors.css';

const Mentors = () => {
  return (
    <section id="mentors" className="section">
      <div className="container">
        <h2 className="section-title">Faculty Mentors</h2>
        <p className="section-subtitle">
          Technical guidance, project feedback, and domain expertise from faculty mentors
        </p>
        <div className="mentors-grid">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mentor-card">
              {mentor.placeholder && (
                <span className="mentor-placeholder-badge">To Be Confirmed</span>
              )}
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-designation">{mentor.designation}</p>
              <p className="mentor-department">{mentor.department}</p>
              <p className="mentor-area">Mentorship: {mentor.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
