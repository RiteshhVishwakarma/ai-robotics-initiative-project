import { founder, teamMembers } from '../../data/team';
import './Team.css';

const Team = () => {
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.domain]) {
      acc[member.domain] = [];
    }
    acc[member.domain].push(member);
    return acc;
  }, {});

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>

        {/* Founder Section */}
        <div className="founder-section">
          <div className="founder-card">
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-university">{founder.university}</p>
            <p className="founder-description">{founder.description}</p>
            <div className="founder-links">
              <a href={founder.links.linkedin} className="founder-link">LinkedIn</a>
              <span className="link-divider">•</span>
              <a href={founder.links.github} className="founder-link">GitHub</a>
              <span className="link-divider">•</span>
              <a href={founder.links.portfolio} className="founder-link">Portfolio</a>
            </div>
          </div>
        </div>

        {/* Team Members by Domain */}
        <div className="team-domains">
          {Object.entries(groupedMembers).map(([domain, members]) => (
            <div key={domain} className="team-domain-section">
              <h3 className="team-domain-title">{domain}</h3>
              <div className="team-grid">
                {members.map((member) => (
                  <div key={member.id} className="team-card">
                    {member.placeholder && (
                      <span className="team-placeholder-badge">Placeholder</span>
                    )}
                    <h4 className="team-member-name">{member.name}</h4>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-info">
                      {member.branch} • {member.year}
                    </p>
                    <div className="team-member-links">
                      <a href={member.links.github} className="team-link">GitHub</a>
                      <span className="link-divider">•</span>
                      <a href={member.links.linkedin} className="team-link">LinkedIn</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
