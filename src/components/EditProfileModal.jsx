import React, { useState, useEffect } from 'react';

const EditProfileModal = ({ user, onUpdateUser }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: 'UI/UX Designer',
    department: 'Frontend',
    resumeName: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        email: user.email || '',
        jobTitle: user.jobTitle || 'UI/UX Designer',
        department: user.department || 'Frontend',
        resumeName: user.resumeName || ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  return (
    <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 shadow">
          <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
            <h5 className="modal-title fw-bold" id="editProfileModalLabel">Edit Profile</h5>
            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            <form onSubmit={handleSubmit} id="editProfileForm">
              <div className="mb-3">
                <label className="form-label fw-semibold small text-muted text-uppercase">Full Name</label>
                <input type="text" className="form-control bg-light border-0 shadow-none" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold small text-muted text-uppercase">Email Address</label>
                <input type="email" className="form-control bg-light border-0 shadow-none" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold small text-muted text-uppercase">Job Title</label>
                  <input type="text" className="form-control bg-light border-0 shadow-none" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold small text-muted text-uppercase">Department</label>
                  <input type="text" className="form-control bg-light border-0 shadow-none" name="department" value={formData.department} onChange={handleChange} />
                </div>
              </div>
              <div className="mb-2 mt-4">
                <label className="form-label fw-semibold small text-muted text-uppercase">Resume (PDF, DOCX)</label>
                <input type="file" className="form-control bg-light border-0 shadow-none" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                {formData.resumeName && <div className="mt-2 small text-success fw-semibold"><i className="bi bi-file-earmark-check me-1"></i> {formData.resumeName} uploaded</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer border-top-0 pt-0 pb-4 px-4">
            <button type="button" className="btn btn-light rounded-pill fw-semibold px-4" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" form="editProfileForm" className="btn btn-primary rounded-pill fw-semibold px-4" data-bs-dismiss="modal" onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
