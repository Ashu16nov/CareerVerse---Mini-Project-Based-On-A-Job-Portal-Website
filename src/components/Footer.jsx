import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 d-flex align-items-center">
              <i className="bi bi-briefcase-fill me-2 fs-4 text-primary"></i>
              <span className="fs-4">CareerVerse</span>
            </h5>
            <p className="text-white-50 small mb-4 pe-lg-4">
              Empowering professionals to build their dream careers. We connect top talent with the most innovative companies worldwide.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-secondary border-0 btn-sm rounded-circle d-flex align-items-center justify-content-center text-white-50" style={{width: '36px', height: '36px'}}><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="btn btn-outline-secondary border-0 btn-sm rounded-circle d-flex align-items-center justify-content-center text-white-50" style={{width: '36px', height: '36px'}}><i className="bi bi-linkedin"></i></a>
              <a href="#" className="btn btn-outline-secondary border-0 btn-sm rounded-circle d-flex align-items-center justify-content-center text-white-50" style={{width: '36px', height: '36px'}}><i className="bi bi-github"></i></a>
              <a href="#" className="btn btn-outline-secondary border-0 btn-sm rounded-circle d-flex align-items-center justify-content-center text-white-50" style={{width: '36px', height: '36px'}}><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>For Candidates</h6>
            <ul className="list-unstyled small d-flex flex-column gap-3">
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Browse Jobs</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Career Resources</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Resume Builder</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Job Alerts</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>For Employers</h6>
            <ul className="list-unstyled small d-flex flex-column gap-3">
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Post a Job</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Pricing</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Recruiting Services</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white transition-all">Hiring Advice</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Subscribe to Newsletter</h6>
            <p className="text-white-50 small mb-3">Get the latest job updates and career advice delivered to your inbox.</p>
            <div className="input-group mb-3 shadow-sm rounded-pill overflow-hidden bg-white p-1">
              <input type="email" className="form-control border-0 shadow-none bg-white text-dark ms-2" placeholder="Email address" aria-label="Email address" />
              <button className="btn btn-primary rounded-pill px-4 fw-semibold" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <hr className="border-secondary opacity-25 my-5" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 small">
          <div className="mb-3 mb-md-0">
            &copy; {new Date().getFullYear()} CareerVerse. All rights reserved.
          </div>
          <div className="d-flex gap-4">
            <a href="#" className="text-white-50 text-decoration-none hover-white">Privacy Policy</a>
            <a href="#" className="text-white-50 text-decoration-none hover-white">Terms of Service</a>
            <a href="#" className="text-white-50 text-decoration-none hover-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
