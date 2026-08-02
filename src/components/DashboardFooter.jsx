import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <footer className="bg-white border-top py-3 mt-auto">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
          <div className="mb-2 mb-md-0 d-flex align-items-center gap-2">
            <i className="bi bi-briefcase-fill text-primary"></i>
            <span className="fw-semibold text-dark">CareerVerse</span>
            <span className="opacity-50 d-none d-md-inline px-1">|</span>
            <span className="opacity-75">&copy; {new Date().getFullYear()} CareerVerse Inc. All rights reserved.</span>
          </div>
          <div className="d-flex gap-3 gap-md-4 align-items-center">
            <a href="mailto:support@careerverse.com" className="text-muted text-decoration-none transition-all" style={{ hover: { color: '#0D8ABC' } }}>
              <i className="bi bi-headset me-1"></i>Support
            </a>
            <Link to="#" className="text-muted text-decoration-none transition-all">Help Center</Link>
            <Link to="#" className="text-muted text-decoration-none transition-all">Privacy Policy</Link>
            <Link to="#" className="text-muted text-decoration-none transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
