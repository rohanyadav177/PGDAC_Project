import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import './PolicyHolder.css';

function PolicyHolder() {
  const [familyMembers, setFamilyMembers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/family-members');
      setFamilyMembers(response.data);
    } catch (error) {
      console.error('Error fetching family members:', error);
      // Handle error
      
    }
  }

 

  return (
    <>
    <Sidebar></Sidebar>
    <div className='policy'>
    <h2 style={{textAlign:'center'}}>Family Members</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridGap: '20px' }}>
      {familyMembers.map((member) => (
        <div key={member.memberId} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
          <h3 style={{ marginTop: '0' }}>{member.fullName}</h3>
          <p><strong>Mobile:</strong> {member.mobileNo}</p>
          <p><strong>Relationship:</strong> {member.relationship}</p>
          <p><strong>Date of Birth:</strong> {member.dateOfBirth}</p>
          <p><strong>Gender:</strong> {member.gender}</p>
          <p><strong>Occupation:</strong> {member.occupation}</p>
          <div>
            
          </div>
        </div>
      ))}
    </div>
    
  </div>
  </>
  );
}

export default PolicyHolder;