import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitted) {
      // Re-validate on change if already submitted once
      validate();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      // Create user object without confirmPassword
      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password // In real app, don't store plain text
      };

      onRegister(newUser);
      navigate('/login');
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
            <i className="bi bi-person-plus-fill fs-2 text-primary"></i>
          </div>
          <h3 className="fw-bold text-dark">Create Account</h3>
          <p className="text-muted">Join us and find your dream job today.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-person text-muted"></i></span>
              <input
                type="text"
                className={`${getInputClass('fullName')} border-start-0`}
                name="fullName"
                placeholder="Mr Ashu"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              {!errors.fullName && submitted && <div className="valid-feedback">Looks good!</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-envelope text-muted"></i></span>
              <input
                type="email"
                className={`${getInputClass('email')} border-start-0`}
                name="email"
                placeholder="ashu@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              {!errors.email && submitted && <div className="valid-feedback">Valid email!</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-lock text-muted"></i></span>
              <input
                type="password"
                className={`${getInputClass('password')} border-start-0`}
                name="password"
                placeholder="Min. 8 characters"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-lock-fill text-muted"></i></span>
              <input
                type="password"
                className={`${getInputClass('confirmPassword')} border-start-0`}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-3 mb-3">
            Register Now
          </button>

          <div className="text-center text-muted small">
            Already have an account? <Link to="/login" className="text-primary fw-semibold text-decoration-none">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
