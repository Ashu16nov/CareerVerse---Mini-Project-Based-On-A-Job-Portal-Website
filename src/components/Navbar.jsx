import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-briefcase-fill me-2 fs-4"></i>
          CareerVerse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active fw-semibold' : ''}`} to="/">
                Home
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active fw-semibold' : ''}`} to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          
          <div className="d-flex align-items-center gap-2">
            {isAuthenticated ? (
              <>
                <span className="text-light me-3 d-none d-lg-block">
                  <i className="bi bi-person-circle me-1"></i> Hello, {user?.fullName || 'User'}
                </span>
                <button className="btn btn-light btn-sm fw-semibold rounded-pill px-3" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm fw-semibold rounded-pill px-3">
                  Login
                </Link>
                <Link to="/register" className="btn btn-light btn-sm fw-semibold rounded-pill px-3 text-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
