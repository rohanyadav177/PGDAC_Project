import React, { useState } from 'react';
import './FamilyPolicy.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
// import NavbarHeader from './NavbarHeader';
import Footer from './Footer';
import Navbar2 from './Navbar2';


const AddFamilyMemberForm = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [relationship, setRelationship] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');

    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate('/ViewMemberPage');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName || !dateOfBirth || !mobileNo || !relationship || !gender || !occupation) {
            alert('Please fill out all required fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/family-members', {
                fullName,
                mobileNo,
                relationship,
                dateOfBirth,
                gender,
                occupation,
              
            });
            alert('Family member added successfully.');
            setFullName('');
            setMobileNo('');
            setRelationship('');
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
            <Navbar2/>
            <div className='family-form-container'>
                <h2>Add Family Member Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Full Name:
                            <input type="text" value={fullName} className="form-control" onChange={(e) => setFullName(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Mobile Number:
                            <input type="text" value={mobileNo} className="form-control" onChange={(e) => setMobileNo(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Relationship:
                            <select value={relationship} className="form-control" onChange={(e) => setRelationship(e.target.value)}>
                                <option value="">Select Relationship</option>
                                <option value="Other">Individual</option>
                                <option value="Parent">Parent</option>
                                <option value="Child">Child</option>
                                <option value="Sibling">Sibling</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Date of Birth:
                            <input type="date" value={dateOfBirth} className="form-control" onChange={(e) => setDateOfBirth(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Gender:
                            <select value={gender} className="form-control" onChange={(e) => setGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Occupation:
                            <select value={occupation} className="form-control" onChange={(e) => setOccupation(e.target.value)}>
                                <option value="">Select Occupation</option>
                                <option value="Student">Student</option>
                                <option value="Employee">Employee</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit" className='family-btn-primary'>Add Family Member</button>
                    <button onClick={handleButtonClick} className='family-btn-secondary'>View Added Members</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddFamilyMemberForm;