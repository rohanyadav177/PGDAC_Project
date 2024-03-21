import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './assets/HealthCareLogo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" style={{ width: '40px', height: '40px',marginRight:'20px' }}/> 
     
          HealthCare
          
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item " style={{fontWeight:'bold', fontSize:'21px'}}>
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>

            <li className="nav-item" style={{fontWeight:'bold', fontSize:'21px'}}>
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item" style={{fontWeight:'bold', fontSize:'21px'}}>
              <Link className="nav-link" to="/Contactus">
                Contactus
              </Link>
            </li>
            <li className="nav-item" style={{fontWeight:'bold', fontSize:'21px'}}>
              <Link className="nav-link" to="/Register">
                Register
              </Link>
            </li>
            <li className="nav-item" style={{fontWeight:'bold', fontSize:'21px'}}>
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;