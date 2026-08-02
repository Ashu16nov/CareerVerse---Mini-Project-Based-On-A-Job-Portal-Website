import React from 'react';

const JobCard = ({ job, onApply, hasApplied }) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 job-card-hover transition-all">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div className="d-flex align-items-center gap-3">
            <img 
              src={`https://ui-avatars.com/api/?name=${job.company}&background=random&color=fff&rounded=true&size=48`} 
              alt={job.company} 
              className="rounded-3 shadow-sm"
              style={{ width: '48px', height: '48px', objectFit: 'cover' }}
            />
            <div>
              <h5 className="card-title fw-bold mb-1 text-dark">{job.title}</h5>
              <h6 className="card-subtitle text-primary fw-semibold">{job.company}</h6>
            </div>
          </div>
          <span className={`badge rounded-pill ${job.jobType === 'Remote' ? 'bg-info bg-opacity-10 text-info' : 'bg-secondary bg-opacity-10 text-secondary'}`}>
            {job.jobType}
          </span>
        </div>
        
        <div className="mb-3 text-muted small d-flex flex-wrap gap-3">
          <span className="d-flex align-items-center">
            <i className="bi bi-geo-alt me-1"></i> {job.location}
          </span>
          <span className="d-flex align-items-center">
            <i className="bi bi-currency-dollar me-1"></i> {job.salary}
          </span>
          <span className="d-flex align-items-center">
            <i className="bi bi-briefcase me-1"></i> {job.experience}
          </span>
        </div>
        
        <p className="card-text text-secondary small text-truncate-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {job.description}
        </p>
        
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span key={index} className="badge bg-primary bg-opacity-10 text-primary border-0 fw-semibold px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
      </div>
      <div className="card-footer bg-white border-top-0 p-4 pt-0">
        <button 
          className={`btn w-100 fw-semibold rounded-pill py-2 ${hasApplied ? 'btn-success disabled' : 'btn-gradient shadow-sm'}`}
          onClick={() => onApply(job)}
          disabled={hasApplied}
        >
          {hasApplied ? (
            <><i className="bi bi-check-circle me-2"></i>Applied</>
          ) : (
            'Apply Now'
          )}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
