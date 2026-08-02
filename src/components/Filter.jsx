import React from 'react';

const Filter = ({ filterOptions, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="card border-0 shadow-sm mb-4 rounded-4">
      <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
        <h5 className="fw-bold mb-0">
          <i className="bi bi-funnel-fill text-primary me-2"></i> Filters
        </h5>
      </div>
      <div className="card-body">

        <div className="mb-4">
          <label className="form-label fw-semibold text-secondary small text-uppercase">Job Type</label>
          <select
            className="form-select shadow-none"
            name="jobType"
            value={filterOptions.jobType}
            onChange={handleChange}
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold text-secondary small text-uppercase">Experience</label>
          <select
            className="form-select shadow-none"
            name="experience"
            value={filterOptions.experience}
            onChange={handleChange}
          >
            <option value="">Any Experience</option>
            <option value="Entry Level">Entry Level</option>
            <option value="1-3 years">1-3 years</option>
            <option value="2-4 years">2-4 years</option>
            <option value="3+ years">3+ years</option>
            <option value="5+ years">5+ years</option>
            <option value="7+ years">7+ years</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold text-secondary small text-uppercase">Location</label>
          <select
            className="form-select shadow-none"
            name="location"
            value={filterOptions.location}
            onChange={handleChange}
          >
            <option value="">Anywhere</option>
            <option value="Remote">Remote</option>
            <option value="Pune">Pune</option>
            <option value="Noida">Noida</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <button
          className="btn btn-outline-secondary w-100 mt-3 fw-semibold"
          onClick={() => onFilterChange('reset', '')}
        >
          Clear Filters
        </button>

      </div>
    </div>
  );
};

export default Filter;
