import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [registeredUsers, setRegisteredUsers] = useState([
    { 
      fullName: 'AASHUTOSH', 
      email: 'aashu16nov@gmail.com', 
      password: 'password123',
      jobTitle: '',
      department: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      careerObjective: '',
      education: [],
      experience: [],
      skills: '',
      softSkills: '',
      achievements: '',
      projects: [],
      certificates: [],
      hobbies: ''
    }
  ]);

  const handleRegister = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };

  const handleLogin = (email, password) => {
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setAppliedJobs([]);
  };

  const handleApplyJob = (job) => {
    if (!appliedJobs.find(j => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, job]);
    }
  };

  const handleUpdateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    setRegisteredUsers(registeredUsers.map(u => u.email === user.email ? { ...u, ...updatedData } : u));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} onLogout={handleLogout} user={user} />} />
        
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        } />
        
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/" /> : <Register onRegister={handleRegister} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        } />
        
        <Route path="/dashboard" element={
          <Dashboard 
            user={user} 
            isAuthenticated={isAuthenticated} 
            onLogout={handleLogout} 
            appliedJobs={appliedJobs} 
            onApply={handleApplyJob} 
            onUpdateUser={handleUpdateUser}
          />
        } />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
