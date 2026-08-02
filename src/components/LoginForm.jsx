import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loginError, setLoginError] = useState('');

  const validate = () => {
    let newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLoginError(''); // Clear login error when user types
    if (submitted) validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validate()) {
      // Simulate login check
      const success = onLogin(formData.email, formData.password);
      if (success) {
        navigate('/');
      } else {
        setLoginError('Invalid email or password. Please try again.');
      }
    }
  };

  const getInputClass = (field) => {
    if (!submitted) return 'form-control';
    return `form-control ${errors[field] ? 'is-invalid' : 'is-valid'}`;
  };

  return (
    <div className="card border-0 shadow-lg p-3 p-md-4 rounded-4 auth-card">
      <div className="card-body">
        <div className="text-center mb-4">
          <div className="d-inline-block bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
            <i className="bi bi-person-check-fill fs-2 text-primary"></i>
          </div>
          <h3 className="fw-bold text-dark">Welcome Back</h3>
          <p className="text-muted">Log in to access your dashboard.</p>
        </div>

        {loginError && (
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2 flex-shrink-0"></i>
            <div>{loginError}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-envelope text-muted"></i></span>
              <input
                type="email"
                className={`${getInputClass('email')} border-start-0`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <label className="form-label fw-semibold">Password</label>
              <a href="#" className="text-primary small text-decoration-none fw-semibold">Forgot Password?</a>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-lock text-muted"></i></span>
              <input
                type="password"
                className={`${getInputClass('password')} border-start-0`}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-3 mb-3">
            Login
          </button>
          
          <div className="text-center text-muted small">
            Don't have an account? <Link to="/register" className="text-primary fw-semibold text-decoration-none">Create one</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
