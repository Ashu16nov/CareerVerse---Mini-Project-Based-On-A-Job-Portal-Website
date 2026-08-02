import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DashboardFooter from '../components/DashboardFooter';
import Profile from '../components/Profile';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import JobCard from '../components/JobCard';
import { jobs as initialJobs } from '../data/jobs';
import { useNavigate } from 'react-router-dom';
import EditProfileModal from '../components/EditProfileModal';

const Dashboard = ({ user, isAuthenticated, onLogout, appliedJobs, onApply, onUpdateUser }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    jobType: '',
    experience: '',
    location: ''
  });
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [toastMessage, setToastMessage] = useState('');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    let result = initialJobs;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }

    // Dropdown filters
    if (filterOptions.jobType) {
      result = result.filter(job => job.jobType === filterOptions.jobType);
    }
    if (filterOptions.experience) {
      result = result.filter(job => job.experience === filterOptions.experience);
    }
    if (filterOptions.location) {
      if (filterOptions.location === 'Remote') {
        result = result.filter(job => job.location.includes('Remote') || job.jobType === 'Remote');
      } else {
        result = result.filter(job => job.location.includes(filterOptions.location));
      }
    }

    setFilteredJobs(result);
  }, [searchTerm, filterOptions]);

  const handleFilterChange = (name, value) => {
    if (name === 'reset') {
      setFilterOptions({ jobType: '', experience: '', location: '' });
      setSearchTerm('');
    } else {
      setFilterOptions(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleApply = (job) => {
    onApply(job);
    setToastMessage(`Successfully applied to ${job.title} at ${job.company}!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="d-flex flex-column min-vh-100 dashboard-bg">
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} user={user} />
      
      <main className="flex-grow-1 py-4 py-lg-5">
        <div className="container">
          
          {/* Toast Notification */}
          {toastMessage && (
            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
              <div className="toast show align-items-center text-bg-success border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body fw-semibold">
                    <i className="bi bi-check-circle-fill me-2"></i> {toastMessage}
                  </div>
                  <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setToastMessage('')} aria-label="Close"></button>
                </div>
              </div>
            </div>
          )}

          <div className="row g-4">
            
            {/* Sidebar: Profile & Filters */}
            <div className="col-lg-4 col-xl-3">
              <Profile user={user} appliedJobs={appliedJobs} />
              <div className="d-none d-lg-block">
                <Filter filterOptions={filterOptions} onFilterChange={handleFilterChange} />
              </div>
            </div>
            
            {/* Main Content: Search & Jobs */}
            <div className="col-lg-8 col-xl-9">
              <div className="mb-4">
                <h3 className="fw-bold mb-1">Find Jobs</h3>
                <p className="text-muted">Showing {filteredJobs.length} available jobs based on your preferences.</p>
              </div>

              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

              {/* Mobile Filter Toggle */}
              <div className="d-lg-none mb-4">
                <button className="btn btn-outline-primary w-100 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#mobileFilters">
                  <i className="bi bi-funnel me-2"></i> Show Filters
                </button>
                <div className="collapse mt-3" id="mobileFilters">
                  <Filter filterOptions={filterOptions} onFilterChange={handleFilterChange} />
                </div>
              </div>

              {/* Job Listings Grid */}
              <div className="row g-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <div className="col-md-6 col-xl-4" key={job.id}>
                      <JobCard 
                        job={job} 
                        onApply={handleApply} 
                        hasApplied={appliedJobs.some(appliedJob => appliedJob.id === job.id)} 
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <div className="d-inline-block bg-white p-4 rounded-circle shadow-sm mb-3">
                      <i className="bi bi-search text-muted fs-1"></i>
                    </div>
                    <h4>No jobs found</h4>
                    <p className="text-muted">Try adjusting your search or filter criteria.</p>
                    <button className="btn btn-primary rounded-pill px-4 mt-2" onClick={() => handleFilterChange('reset', '')}>
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </main>
      
      <DashboardFooter />
      <EditProfileModal user={user} onUpdateUser={onUpdateUser} />
    </div>
  );
};

export default Dashboard;
