import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ViewPolicyToAdmin.css"; // Update the CSS file import
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';

const ViewPolicyToAdmin = () => {
    const [policyData, setPolicyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataCount, setDataCount] = useState(0); 
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:8080/view-policy-api";
                const response = await axios.get(url);
                setPolicyData(response.data);
                setDataCount(response.data.length);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRedirectUpdate = (policyId) => {
        navigate(`/AdminDashBoard/Update/${policyId}`);
    };

    const handleDelete = async (policyId) => {
        await axios.delete(`http://localhost:8080/delete-policy-api/${policyId}`);
        setPolicyData(policyData.filter(policy => policy.policyId !== policyId));
        setDataCount(dataCount - 1);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <Sidebar></Sidebar>
        <div className='admin-policy-div'> {/* Updated classname */}
            <h2>Total Data Count: {dataCount}</h2>
            <div className="admin-policy-card-container"> {/* Updated classname */}
                {policyData.map((curPost) => {
                    const { policyName, keyFeatures, sumInsured, premium, policyNo, policyPeriod, policyId, coverageType } = curPost;
                    const { type } = coverageType;

                    return (
                        <div className="admin-policy-card" key={policyId}> {/* Updated classname */}
                            <div className="admin-policy-card-info"> {/* Updated classname */}
                                <h2>Policy No: {policyNo}</h2>
                                <h2>Policy Name: {policyName}</h2>
                            </div>
                            <p><strong>Key Features:</strong> {keyFeatures}</p>
                            <div className="admin-policy-info"> {/* Updated classname */}
                                <div className="admin-policy-details"> {/* Updated classname */}
                                    <p><strong>Sum Insured:</strong> {sumInsured}</p>
                                </div>
                                <div className="admin-policy-details"> {/* Updated classname */}
                                    <p><strong>Premium:</strong> {premium}</p>
                                </div>
                            </div>
                            <div className="admin-policy-info"> {/* Updated classname */}
                                <div className="admin-policy-details"> {/* Updated classname */}
                                    <p><strong>Policy Period:</strong> {policyPeriod}</p>
                                </div>
                                <div className="admin-policy-details"> {/* Updated classname */}
                                    <p><strong>Type:</strong> {type}</p>
                                </div>
                            </div>
                            <div className="admin-button-container"> {/* Updated classname */}
                                <button className="admin-update-button" onClick={() => handleRedirectUpdate(policyId)}>Update</button>
                                <button className="admin-delete-button" onClick={() => handleDelete(policyId)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
};

export default ViewPolicyToAdmin;