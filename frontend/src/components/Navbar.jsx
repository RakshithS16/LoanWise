import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fintech-nav sticky-top">
      <div className="container">
        <NavLink className="navbar-brand text-white d-flex align-items-center" to="/">
          <Wallet className="me-2" color="#3b82f6" />
          <span className="fw-bold" style={{ letterSpacing: '1px' }}>LoanWise</span>
        </NavLink>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/eligibility">Eligibility Checker</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
