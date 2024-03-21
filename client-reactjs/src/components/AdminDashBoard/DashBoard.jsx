import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DashBoard.css";
import Sidebar from './SideBar';

function Dashboard() {
    const [policyCount, setPolicyCount] = useState(0); // State to store the count of policies

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/view-policy-api");
                setPolicyCount(response.data.length); // Set the count of policies
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <Sidebar></Sidebar>
        <div className='parent'>
            <ul className='box-info'>
                <li>
                    <i className='bx'></i>
                    <span className="text">
                        <h3>0</h3>
                        <p>Policy Holders</p>
                    </span>
                </li>
                <li>
                    <i className='bx'></i>
                    <span className="text">
                        <h3>{policyCount}</h3>
                        <p>Total policy</p>
                    </span>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Dashboard;