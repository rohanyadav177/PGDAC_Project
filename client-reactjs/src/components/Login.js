import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './assets/login_logo.png';
import NavbarHeader from './NavbarHeader';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [islogin,setisLogin] = useState(false);
  const navigation = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });
       var token  = response.data;

       
       localStorage.setItem('token', JSON.stringify(token));
       localStorage.setItem('islogin', true);

      // Store token in local storage
      // localStorage.setItem('token', token);
      // console.log(response.data);
      // console.log(token);
      // console.log(token.id);

      
        // Assuming response.data contains UserType
        const userType = response.data.userType;
        if (userType === "Normal") {
          navigation('/Lander');
        } 
        else if (userType === "Admin") {
          navigation('/AdminDashBoard/SideBar');
        }
      
      // if (response.data === "Success") {
      //   navigation('/Lander');
      // } 
      else {
        // Handle error here, for example, show an error message 
        setError('Invalid email or password');
      }
     // Handle success response
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle error here, show an error message to the user
      setError('Login failed. Please try again later.');
      localStorage.setItem('islogin', false);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/recover-password', {
        email: forgotPasswordEmail,
      });
  
      const responseString = response.data;
  
      // Use regex to extract email and password
      const emailMatch = responseString.match(/Email: (.+?),/);
      const passwordMatch = responseString.match(/Password: (.+)$/);
  
      // Check if matches are found
      const newForgetEmail = emailMatch ? emailMatch[1] : null;
      const newForgetPassword = passwordMatch ? passwordMatch[1] : null;
  
      // Now you have email and password as separate variables
      console.log('Email:', newForgetEmail);
      console.log('Password:', newForgetPassword);

      setPass(newForgetPassword);
  
    } catch (error) {
      console.error('Forgot password request failed:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };


  return (
    <>
    <NavbarHeader></NavbarHeader>
    <div className="login-container"> {/* Added custom class for styling */}
      <div className="card">
        <div className="card-body">
          <img src={logo} alt="Logo" className="logo"/> {/* Include logo image with 80x80 size */}
          <h2 className="card-title">Login</h2>
          <form>

          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}

            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" placeholder="Enter your email" 
              value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password" id="form2Example2" className="form-control"
                placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" htmlFor="form2Example31">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="col">
                {/* Simple link */}
                <a href="#!" onClick={() => setShowForgotPassword(!showForgotPassword)}>
                  {showForgotPassword ? 'Back to Login' : 'Forgot password?'}
                </a>
              </div>
            </div>

            {showForgotPassword ? (
              <div className="mb-4">
                {/* Forgot Password form fields */}
                <div className="form-outline">
                  <input type="email" id="forgotPasswordEmail" className="form-control" placeholder="Enter your email"
                    value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
                </div><br/>
                <button type="button" className="btn btn-primary btn-block" data-bs-container="body" data-bs-toggle="popover" 
                    data-bs-placement="top" data-bs-content={pass} data-bs-title="Password" onClick={handleForgotPassword}>
                        Recover Password
                </button>   
              </div>
            ) : (
              // Submit button
              <button type="button"className="btn btn-primary btn-block"onClick={handleLogin} >Sign in</button>
            )}

            {/* Register buttons */}
            <div className="text-center">
              <p>            <br/>
                Not a member? <Link to="/register">Register</Link> 
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default Login;
