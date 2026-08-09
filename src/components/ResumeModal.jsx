import React from 'react';
import html2pdf from 'html2pdf.js';

const ResumeModal = ({ user }) => {
  if (!user) return null;

  const handlePrint = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin:       0.4,
      filename:     `${user.fullName ? user.fullName.replace(/\s+/g, '_') : 'Resume'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['css', 'legacy'], avoid: '.resume-section' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const renderList = (text) => {
    if (!text) return null;
    return (
      <ul className="mb-0" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
        {text.split('\n').filter(item => item.trim() !== '').map((item, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>
            {item.includes(':') ? (
              <>
                <strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}
              </>
            ) : item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="modal fade resume-modal" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-0 border-0 shadow-lg">
          <div className="modal-header border-bottom-0 pb-0 pt-3 px-4 d-print-none bg-light">
            <h5 className="modal-title fw-bold" id="resumeModalLabel">Resume Preview</h5>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-outline-dark rounded-0 fw-semibold shadow-sm" onClick={handlePrint}>
                <i className="bi bi-download me-2"></i> Download Resume
              </button>
              <button type="button" className="btn-close shadow-none mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
          
          <div className="modal-body p-0">
            {/* The resume document container - designed to look exactly like a standard PDF resume */}
            <div 
              className="resume-document bg-white text-dark mx-auto" 
              id="resume-content" 
              style={{ 
                fontFamily: '"Times New Roman", Times, serif', 
                fontSize: '11pt', 
                lineHeight: '1.4', 
                padding: '40px',
                color: '#000'
              }}
            >
              {/* Header Section */}
              <div className="text-start mb-2 resume-section">
                <h1 className="fw-bold text-uppercase mb-1" style={{ fontSize: '24pt', letterSpacing: '1px' }}>
                  {user.fullName || 'YOUR NAME'}
                </h1>
                
                <div style={{ fontSize: '10.5pt', marginBottom: '2px' }}>
                  {user.address && <span>{user.address}</span>}
                </div>
                <div style={{ fontSize: '10.5pt' }}>
                  {user.email && <span>{user.email}</span>}
                  {user.phone && <span className="mx-2">|| {user.phone}</span>}
                  {user.linkedin && <span className="mx-2">|| {user.linkedin}</span>}
                  {user.github && <span className="mx-2">|| {user.github}</span>}
                </div>
              </div>

              {/* Career Objective Section */}
              {user.careerObjective && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Career Objective</h5>
                  <div style={{ textAlign: 'justify' }}>{user.careerObjective}</div>
                </div>
              )}

              {/* Education Section */}
              {user.education && user.education.length > 0 && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Education</h5>
                  <ul className="mb-0" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {user.education.map((edu, index) => (
                      <li key={index} style={{ marginBottom: '4px' }}>
                        <strong>{edu.degree}</strong> {edu.institution && ` ${edu.institution}`} {edu.year && ` | ${edu.year}`} {edu.grade && ` | ${edu.grade}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Experience Section - If added */}
              {user.experience && user.experience.length > 0 && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Experience</h5>
                  {user.experience.map((exp, index) => (
                    <div key={index} className="mb-2">
                      <div className="fw-bold">{exp.title} | {exp.company} | {exp.duration}</div>
                      {renderList(exp.description)}
                    </div>
                  ))}
                </div>
              )}

              {/* Projects Section */}
              {user.projects && user.projects.length > 0 && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Academic Projects</h5>
                  {user.projects.map((proj, index) => (
                    <div key={index} className="mb-2">
                      <div className="fw-bold">
                        {proj.name} {proj.techStack && ` | ${proj.techStack}`} {proj.date && ` | ${proj.date}`}
                      </div>
                      {renderList(proj.description)}
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Skills Section */}
              {user.skills && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Technical Skills</h5>
                  {renderList(user.skills)}
                </div>
              )}

              {/* Soft Skills Section */}
              {user.softSkills && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Soft Skills</h5>
                  {renderList(user.softSkills)}
                </div>
              )}

              {/* Achievements Section */}
              {user.achievements && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Achievements</h5>
                  {renderList(user.achievements)}
                </div>
              )}

              {/* Certificates Section */}
              {user.certificates && user.certificates.length > 0 && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Certificates</h5>
                  <ul className="mb-0" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {user.certificates.map((cert, index) => (
                      <li key={index} style={{ marginBottom: '4px' }}>
                        {cert.name} {cert.issuer && `- ${cert.issuer}`} {cert.year && `(${cert.year})`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hobbies Section */}
              {user.hobbies && (
                <div className="mb-2 resume-section">
                  <hr style={{ borderTop: '1.5px solid #000', margin: '10px 0 6px 0', opacity: 1 }} />
                  <h5 className="fw-bold mb-1" style={{ fontSize: '13pt' }}>Hobbies</h5>
                  {renderList(user.hobbies)}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
