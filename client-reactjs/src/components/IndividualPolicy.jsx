import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IndividualPolicy.css';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Footer from './Footer';



const IndividualPolicy = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNo,setMobileno] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
   const [policyData, setPolicyData] = useState(null);

  const navigate = useNavigate(); 

  const ViewLanderpage=()=>{
    navigate('/Lander')
  }

  useEffect(() => {
    const selectedPolicy = JSON.parse(localStorage.getItem('selectedPolicy'));
    if (selectedPolicy) {
        setPolicyData(selectedPolicy);
    } else {
        navigate('/');
    }
}, [navigate]);
    
  // const handleButtonClick = () => {
     
  //     navigate('/Payment');
  // };

  if (!policyData) {
    return <h1>Loading...</h1>;
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!fullName || !dateOfBirth || !mobileNo || !gender || !occupation) {
      alert('Please fill out all required fields.');
      return;
    }
    // Create formData object to store form data
    const formData = {
      fullName,
      mobileNo,
      dateOfBirth,
      gender,
      occupation,
    
    };

    localStorage.setItem('individualFormData', JSON.stringify(formData));

    // Send POST request to create new family member
    try {
      await axios.post('http://localhost:8080/individual-api', formData);
    
      alert('Family member added successfully.');
      navigate('/Payment');
      // Clear form fields
      setFullName('');
      setMobileno('');
      setDateOfBirth('');
      setGender('');
      setOccupation('');
      
    } catch (error) {
      console.error('Error adding family member:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <Navbar2></Navbar2>
    <div className='container'>
    <div className='form-container'>
      <h2>Add Individual details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
           type="text" id="phone" name="phone"
            className="form-control"
            value={mobileNo}
            onChange={(e) => setMobileno(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <select
            className="form-control"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          >
            <option value="">Select occupation</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Other">Other</option>
            <option value=""></option>
          </select>
        </div>
        {/* <button type="submit" className="btn btn-primary">Add Family Member</button>
        <span style={{ marginRight: '170px' }}></span> */}
       {/* <h2>Policy Name: {policyData.policyName}</h2> */}
        <button onClick={handleSubmit} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Proceed to Payment</button>
       
      </form>
    </div>
        
    <div className="policy-details">
        <h2>Policy Details:</h2>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
          {/* Policy details */}
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Policy No:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.policyNo}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Policy Name:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.policyName}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Sum Insured:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.sumInsured}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Premium:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.premium}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Policy Period:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.policyPeriod}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Type:</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{policyData.coverageType.type}</td> {/* Extract policy type */}
            </tr>
          </tbody>
        </table>
      </div>
      <button className="go-back" onClick={ViewLanderpage}>Go back</button>
    </div>
    <Footer></Footer>
    </>
  );
};

export default IndividualPolicy