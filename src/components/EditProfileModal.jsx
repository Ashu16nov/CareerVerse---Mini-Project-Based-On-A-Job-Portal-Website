import React, { useState, useEffect } from 'react';

const EditProfileModal = ({ user, onUpdateUser }) => {
  const [activeTab, setActiveTab] = useState('details');
  
  const defaultData = {
    fullName: '', email: '', jobTitle: '', department: '', phone: '', address: '', linkedin: '', github: '', careerObjective: '',
    education: [], experience: [], skills: '', softSkills: '', achievements: '', projects: [], certificates: [], hobbies: '', resumeName: ''
  };

  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    if (user) {
      setFormData({
        ...defaultData,
        ...user
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resumeName: e.target.files[0].name });
    }
  };

  const handleListChange = (listName, index, field, value) => {
    const newList = [...formData[listName]];
    newList[index][field] = value;
    setFormData({ ...formData, [listName]: newList });
  };

  const addListItem = (listName, emptyItem) => {
    setFormData({ ...formData, [listName]: [...formData[listName], { ...emptyItem, id: Date.now() }] });
  };

  const removeListItem = (listName, index) => {
    const newList = [...formData[listName]];
    newList.splice(index, 1);
    setFormData({ ...formData, [listName]: newList });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  const tabs = [
    { id: 'details', label: 'Basic Info', icon: 'person' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'education', label: 'Education', icon: 'book' },
    { id: 'skills', label: 'Skills & Extras', icon: 'star' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'certificates', label: 'Certificates', icon: 'award' }
  ];

  return (
    <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content rounded-4 border-0 shadow">
          <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
            <h5 className="modal-title fw-bold" id="editProfileModalLabel">Edit Resume / Profile</h5>
            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div className="modal-body p-0">
            <div className="d-flex flex-column flex-md-row">
              {/* Sidebar Tabs */}
              <div className="p-4 border-end bg-light" style={{ minWidth: '250px' }}>
                <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                  {tabs.map(tab => (
                    <button 
                      key={tab.id}
                      className={`nav-link text-start fw-semibold mb-2 ${activeTab === tab.id ? 'active shadow-sm' : 'text-dark'}`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                    >
                      <i className={`bi bi-${tab.icon} me-2`}></i> {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4 flex-grow-1" style={{ height: '65vh', overflowY: 'auto' }}>
                <form id="editProfileForm" onSubmit={handleSubmit}>
                  
                  {/* Basic Info Tab */}
                  {activeTab === 'details' && (
                    <div className="animation-fade-in">
                      <h6 className="fw-bold mb-4 text-primary">Basic Information</h6>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">Full Name</label>
                          <input type="text" className="form-control bg-light border-0 shadow-none" name="fullName" value={formData.fullName || ''} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">Email Address</label>
                          <input type="email" className="form-control bg-light border-0 shadow-none" name="email" value={formData.email || ''} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">Phone Number</label>
                          <input type="text" className="form-control bg-light border-0 shadow-none" name="phone" value={formData.phone || ''} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">Address</label>
                          <input type="text" className="form-control bg-light border-0 shadow-none" name="address" value={formData.address || ''} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">LinkedIn</label>
                          <input type="text" className="form-control bg-light border-0 shadow-none" name="linkedin" value={formData.linkedin || ''} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold small text-muted text-uppercase">GitHub</label>
                          <input type="text" className="form-control bg-light border-0 shadow-none" name="github" value={formData.github || ''} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-semibold small text-muted text-uppercase">Career Objective</label>
                          <textarea className="form-control bg-light border-0 shadow-none" rows="4" name="careerObjective" value={formData.careerObjective || ''} onChange={handleChange}></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience Tab */}
                  {activeTab === 'experience' && (
                    <div className="animation-fade-in">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h6 className="fw-bold mb-0 text-primary">Work Experience</h6>
                        <button type="button" className="btn btn-sm btn-outline-primary rounded-pill fw-semibold" onClick={() => addListItem('experience', { title: '', company: '', duration: '', description: '' })}>
                          <i className="bi bi-plus-lg me-1"></i> Add Experience
                        </button>
                      </div>
                      
                      {formData.experience.length === 0 && <p className="text-muted small">No experience added yet.</p>}
                      
                      {formData.experience.map((exp, index) => (
                        <div key={exp.id || index} className="p-3 border rounded-3 mb-3 bg-light position-relative">
                          <button type="button" className="btn btn-sm btn-close position-absolute top-0 end-0 m-2 shadow-none" onClick={() => removeListItem('experience', index)}></button>
                          <div className="row g-2">
                            <div className="col-md-6">
                              <label className="form-label small mb-1">Job Title</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={exp.title} onChange={(e) => handleListChange('experience', index, 'title', e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label small mb-1">Company</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={exp.company} onChange={(e) => handleListChange('experience', index, 'company', e.target.value)} />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Duration (e.g. 2020 - 2022)</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={exp.duration} onChange={(e) => handleListChange('experience', index, 'duration', e.target.value)} />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Description</label>
                              <textarea className="form-control form-control-sm shadow-none" rows="2" value={exp.description} onChange={(e) => handleListChange('experience', index, 'description', e.target.value)}></textarea>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Education Tab */}
                  {activeTab === 'education' && (
                    <div className="animation-fade-in">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h6 className="fw-bold mb-0 text-primary">Education</h6>
                        <button type="button" className="btn btn-sm btn-outline-primary rounded-pill fw-semibold" onClick={() => addListItem('education', { degree: '', institution: '', year: '', grade: '' })}>
                          <i className="bi bi-plus-lg me-1"></i> Add Education
                        </button>
                      </div>
                      
                      {formData.education.length === 0 && <p className="text-muted small">No education added yet.</p>}
                      
                      {formData.education.map((edu, index) => (
                        <div key={edu.id || index} className="p-3 border rounded-3 mb-3 bg-light position-relative">
                          <button type="button" className="btn btn-sm btn-close position-absolute top-0 end-0 m-2 shadow-none" onClick={() => removeListItem('education', index)}></button>
                          <div className="row g-2">
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Degree / Course</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={edu.degree} onChange={(e) => handleListChange('education', index, 'degree', e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label small mb-1">Institution / Board</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={edu.institution} onChange={(e) => handleListChange('education', index, 'institution', e.target.value)} />
                            </div>
                            <div className="col-md-3">
                              <label className="form-label small mb-1">Year</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={edu.year} onChange={(e) => handleListChange('education', index, 'year', e.target.value)} />
                            </div>
                            <div className="col-md-3">
                              <label className="form-label small mb-1">Grade/CGPA</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={edu.grade} onChange={(e) => handleListChange('education', index, 'grade', e.target.value)} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills & Extras Tab */}
                  {activeTab === 'skills' && (
                    <div className="animation-fade-in">
                      <h6 className="fw-bold mb-4 text-primary">Skills & Extras</h6>
                      <div className="mb-3">
                        <label className="form-label fw-semibold small text-muted text-uppercase">Technical Skills (Line by line)</label>
                        <textarea className="form-control bg-light border-0 shadow-none" rows="4" name="skills" value={formData.skills || ''} onChange={handleChange}></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold small text-muted text-uppercase">Soft Skills (Line by line)</label>
                        <textarea className="form-control bg-light border-0 shadow-none" rows="3" name="softSkills" value={formData.softSkills || ''} onChange={handleChange}></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold small text-muted text-uppercase">Achievements (Line by line)</label>
                        <textarea className="form-control bg-light border-0 shadow-none" rows="3" name="achievements" value={formData.achievements || ''} onChange={handleChange}></textarea>
                      </div>
                      <div>
                        <label className="form-label fw-semibold small text-muted text-uppercase">Hobbies (Line by line)</label>
                        <textarea className="form-control bg-light border-0 shadow-none" rows="3" name="hobbies" value={formData.hobbies || ''} onChange={handleChange}></textarea>
                      </div>
                    </div>
                  )}

                  {/* Projects Tab */}
                  {activeTab === 'projects' && (
                    <div className="animation-fade-in">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h6 className="fw-bold mb-0 text-primary">Projects</h6>
                        <button type="button" className="btn btn-sm btn-outline-primary rounded-pill fw-semibold" onClick={() => addListItem('projects', { name: '', techStack: '', date: '', description: '' })}>
                          <i className="bi bi-plus-lg me-1"></i> Add Project
                        </button>
                      </div>
                      
                      {formData.projects.length === 0 && <p className="text-muted small">No projects added yet.</p>}
                      
                      {formData.projects.map((proj, index) => (
                        <div key={proj.id || index} className="p-3 border rounded-3 mb-3 bg-light position-relative">
                          <button type="button" className="btn btn-sm btn-close position-absolute top-0 end-0 m-2 shadow-none" onClick={() => removeListItem('projects', index)}></button>
                          <div className="row g-2">
                            <div className="col-md-6">
                              <label className="form-label small mb-1">Project Name</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={proj.name} onChange={(e) => handleListChange('projects', index, 'name', e.target.value)} />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label small mb-1">Tech Stack</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={proj.techStack} onChange={(e) => handleListChange('projects', index, 'techStack', e.target.value)} />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Date</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={proj.date} onChange={(e) => handleListChange('projects', index, 'date', e.target.value)} />
                            </div>
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Description (Line by line)</label>
                              <textarea className="form-control form-control-sm shadow-none" rows="3" value={proj.description} onChange={(e) => handleListChange('projects', index, 'description', e.target.value)}></textarea>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Certificates Tab */}
                  {activeTab === 'certificates' && (
                    <div className="animation-fade-in">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h6 className="fw-bold mb-0 text-primary">Certificates & Awards</h6>
                        <button type="button" className="btn btn-sm btn-outline-primary rounded-pill fw-semibold" onClick={() => addListItem('certificates', { name: '', issuer: '', year: '' })}>
                          <i className="bi bi-plus-lg me-1"></i> Add Certificate
                        </button>
                      </div>
                      
                      {formData.certificates.length === 0 && <p className="text-muted small">No certificates added yet.</p>}
                      
                      {formData.certificates.map((cert, index) => (
                        <div key={cert.id || index} className="p-3 border rounded-3 mb-3 bg-light position-relative">
                          <button type="button" className="btn btn-sm btn-close position-absolute top-0 end-0 m-2 shadow-none" onClick={() => removeListItem('certificates', index)}></button>
                          <div className="row g-2">
                            <div className="col-md-12">
                              <label className="form-label small mb-1">Certificate Name</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={cert.name} onChange={(e) => handleListChange('certificates', index, 'name', e.target.value)} />
                            </div>
                            <div className="col-md-8">
                              <label className="form-label small mb-1">Issuer / Organization</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={cert.issuer} onChange={(e) => handleListChange('certificates', index, 'issuer', e.target.value)} />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label small mb-1">Year</label>
                              <input type="text" className="form-control form-control-sm shadow-none" value={cert.year} onChange={(e) => handleListChange('certificates', index, 'year', e.target.value)} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </form>
              </div>
            </div>
          </div>
          
          <div className="modal-footer border-top p-3 bg-white rounded-bottom-4">
            <button type="button" className="btn btn-light rounded-pill fw-semibold px-4" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" form="editProfileForm" className="btn btn-primary rounded-pill fw-semibold px-4" data-bs-dismiss="modal" onClick={handleSubmit}>Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
