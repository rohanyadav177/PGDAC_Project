import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";
import logo from './assets/HealthCareLogo.jpg'; 
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const navigation = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Redirect to login page or perform any other logout actions
    // For example:
    window.location.href = '/login'; // Redirect to login page

    //  navigation('/login');

};

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '20px' }}/> 
          HealthCare
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{ fontWeight: 'bold', fontSize: '21px' }}>
              <NavLink className="nav-link" activeClassName="active" exact to="/Home">
                Home
              </NavLink>
            </li>

            <li className="nav-item" style={{ fontWeight: 'bold', fontSize: '21px' }}>
              <NavLink className="nav-link" activeClassName="active" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item" style={{ fontWeight: 'bold', fontSize: '21px' }}>
              <NavLink className="nav-link" activeClassName="active" to="/Contactus">
                Contactus
              </NavLink>
            </li>
            <li className="nav-item" style={{ fontWeight: 'bold', fontSize: '21px' }}>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;