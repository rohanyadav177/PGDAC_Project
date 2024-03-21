import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';


function ViewMemberPage() {
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

  const handleRemoveMember = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-members/${id}`);
      setFamilyMembers(familyMembers.filter(member => member.memberId !== id));
      alert('Family member removed successfully.');
    } catch (error) {
      console.error('Error removing family member:', error);
      // Handle error
      alert('An error occurred while removing the family member. Please try again later.');
    }
  };

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handlePaymentButtonClick = () => {
    // const selectedMember = familyMembers.find(member => member.memberId === member);
    // localStorage.setItem('selectedMember', JSON.stringify(selectedMember));
    navigate('/Payment'); // Navigate to the payment page
  };

  return (
    
    <div>
    <Navbar2></Navbar2>
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
            <button onClick={() => handleRemoveMember(member.memberId)} >Remove</button>
            <button onClick={() => handlePaymentButtonClick(member.memberId)}>Proceed to Payment</button>
          </div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button onClick={handleBackButtonClick} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Go Back</button>
      {/* <button onClick={handlePaymentButtonClick} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Proceed to Payment</button> */}
    </div>
  </div>
  );
}

export default ViewMemberPage;