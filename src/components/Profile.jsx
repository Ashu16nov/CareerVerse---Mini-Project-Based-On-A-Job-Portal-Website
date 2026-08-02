import React from 'react';

const Profile = ({ user, appliedJobs }) => {
  return (
    <div className="card border-0 shadow-sm mb-4 profile-card rounded-4 overflow-hidden">
      <div className="profile-cover"></div>
      <div className="card-body p-4 text-center position-relative z-index-1">
        <div className="position-relative d-inline-block mb-3 bg-white p-1 rounded-circle">
          <img 
            src={`https://ui-avatars.com/api/?name=${user?.fullName || 'Mr Ashu'}&background=0D8ABC&color=fff&size=120`} 
            alt="Profile" 
            className="rounded-circle shadow-sm border border-3 border-white"
          />
          <span className="position-absolute bottom-0 end-0 p-2 bg-success border border-light rounded-circle" title="Online"></span>
        </div>
        
        <h4 className="fw-bold mb-1">{user?.fullName || 'Mr Ashu'}</h4>
        <p className="text-muted small mb-3">{user?.email || 'ashu@example.com'}</p>
        
        <div className="d-flex justify-content-center gap-2 mb-4">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">{user?.jobTitle || 'UI/UX Designer'}</span>
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill">{user?.department || 'Frontend'}</span>
        </div>
        
        <hr className="text-secondary opacity-25" />
        
        <div className="row text-center mt-3">
          <div className="col-6 border-end">
            <h3 className="fw-bold text-primary mb-0">{appliedJobs.length}</h3>
            <span className="text-muted small text-uppercase fw-semibold">Applied</span>
          </div>
          <div className="col-6">
            <h3 className="fw-bold text-success mb-0">0</h3>
            <span className="text-muted small text-uppercase fw-semibold">Interviews</span>
          </div>
        </div>

        <hr className="text-secondary opacity-25 my-4" />
        
        <div className="text-start mb-4">
           <h6 className="fw-bold mb-2 small text-uppercase text-muted">Resume</h6>
           <div className="d-flex align-items-center justify-content-between p-3 border rounded-3 bg-light">
             <div className="d-flex align-items-center text-truncate pe-2">
               <i className={`bi bi-file-earmark-${user?.resumeName ? 'check-fill text-success' : 'pdf text-danger'} fs-4 me-3`}></i>
               <span className="small fw-semibold text-truncate">{user?.resumeName || 'No resume uploaded'}</span>
             </div>
           </div>
        </div>

        <button className="btn btn-outline-primary w-100 rounded-pill fw-semibold py-2" data-bs-toggle="modal" data-bs-target="#editProfileModal">
          <i className="bi bi-pencil-square me-2"></i>Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
