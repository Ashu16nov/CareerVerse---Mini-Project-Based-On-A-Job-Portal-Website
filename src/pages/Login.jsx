import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = ({ onLogin, isAuthenticated, onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      
      <main className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <LoginForm onLogin={onLogin} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
