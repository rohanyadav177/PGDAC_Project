
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from './SideBar';

const Update = () => {
    const { policyId } = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/view-policy-api/${policyId}`);
                setFormData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching policy:', error);
            }
        };

        fetchData();
    }, [policyId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/update-policy-api/policy/${policyId}`, formData);
            console.log('Policy updated successfully');
        } catch (error) {
            console.error('Error updating policy:', error);
        }
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <Sidebar></Sidebar>
        <div className="form-container">
            <h2>Update Policy</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Policy Number:</label>
                    <input type="text" name="policyNo" value={formData.policyNo || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Policy Name:</label>
                    <input type="text" name="policyName" value={formData.policyName || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Policy Period:</label>
                    <input type="text" name="policyPeriod" value={formData.policyPeriod || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Sum Insured:</label>
                    <input type="text" name="sumInsured" value={formData.sumInsured || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Premium:</label>
                    <input type="text" name="premium" value={formData.premium || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Key Features:</label>
                    <textarea name="keyFeatures" value={formData.keyFeatures || ''} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" value={formData.description || ''} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
        </>
    );
};

export default Update;