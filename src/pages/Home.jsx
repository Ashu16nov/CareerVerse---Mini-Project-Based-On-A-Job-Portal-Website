import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = ({ isAuthenticated, onLogout, user }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} user={user} />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-5 pt-lg-6 pb-lg-6 position-relative overflow-hidden">
          <div className="container position-relative z-index-1">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start pt-5 pb-5">
                <span className="badge bg-light text-primary mb-3 px-3 py-2 rounded-pill fw-semibold shadow-sm">
                  <i className="bi bi-stars me-1"></i> Over 10,000+ jobs available
                </span>
                <h1 className="display-4 fw-bold mb-4 lh-sm">
                  Find Your Dream Job Today
                </h1>
                <p className="lead mb-4 opacity-75">
                  Connect with top employers and discover opportunities that match your skills and aspirations.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-5">
                  {isAuthenticated ? (
                    <Link to="/dashboard" className="btn btn-light btn-lg fw-bold rounded-pill px-4 shadow">
                      Go to Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link to="/register" className="btn btn-light btn-lg fw-bold rounded-pill px-4 shadow">
                        Create Account
                      </Link>
                      <Link to="/login" className="btn btn-outline-light btn-lg fw-bold rounded-pill px-4">
                        Sign In
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block text-center pt-5 pb-5">
                 <div className="hero-image-placeholder p-5 rounded-circle bg-white bg-opacity-10 shadow-lg ms-auto me-auto" style={{ width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-briefcase-fill text-white opacity-50" style={{ fontSize: '12rem' }}></i>
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="position-absolute top-0 end-0 mt-n4 me-n4" style={{ opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="white" />
            </svg>
          </div>
          <div className="position-absolute bottom-0 start-0 mb-n5 ms-n5" style={{ opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}>
            <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="100" fill="white" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-sm-6 col-md-3">
                <h2 className="fw-bold text-primary mb-1">10k+</h2>
                <p className="text-muted mb-0">Active Jobs</p>
              </div>
              <div className="col-sm-6 col-md-3">
                <h2 className="fw-bold text-primary mb-1">5k+</h2>
                <p className="text-muted mb-0">Companies</p>
              </div>
              <div className="col-sm-6 col-md-3">
                <h2 className="fw-bold text-primary mb-1">1M+</h2>
                <p className="text-muted mb-0">Users</p>
              </div>
              <div className="col-sm-6 col-md-3">
                <h2 className="fw-bold text-primary mb-1">98%</h2>
                <p className="text-muted mb-0">Success Rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
