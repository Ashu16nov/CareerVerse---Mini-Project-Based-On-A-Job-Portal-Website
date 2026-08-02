import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="card border-0 shadow-sm mb-4 rounded-4">
      <div className="card-body p-2 p-md-3">
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-white border-end-0 text-muted">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0 shadow-none"
            placeholder="Search by job title, company, or skills..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="btn btn-primary px-4 fw-semibold" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
