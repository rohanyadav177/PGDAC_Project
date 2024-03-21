import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Lander.css";
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Footer from './Footer';

const Lander = () => {
    const [policyData, setPolicyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const navigate = useNavigate(); 

    // const handleButtonClick = () => {
    //     if (selectedType === 'Family') {
    //         navigate('/FamilyPolicy');
    //     } else if (selectedType === 'Individual') {
    //         navigate('/IndividualPolicy');
    //     }
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "http://localhost:8080/view-policy-api";
                if (selectedPeriod) {
                    url = `http://localhost:8080/view-policy-api/years/${selectedPeriod}`;
                } else if (selectedPrice) {
                    url = `http://localhost:8080/view-policy-api/price/${selectedPrice}`;
                } else if (selectedType) {
                    url = `http://localhost:8080/view-policy-api/type/${selectedType}`;
                }
                const response = await axios.get(url);
                setPolicyData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedPeriod, selectedPrice, selectedType]);

    const handlePeriodChange = event => {
        setSelectedPeriod(event.target.value);
    };

    const handlePriceChange = event => {
        setSelectedPrice(event.target.value);
    };

    const handleTypeChange = event => {
        setSelectedType(event.target.value);
    };

    // const handleBuyPolicy = (policy) => {
    //     localStorage.setItem('selectedPolicy', JSON.stringify(policy));
    //     navigate(`/${selectedType}Policy`);
    // };
    

// Now you can use userId in your code as needed
    
     const handleBuyPolicy = (policy) => {
        localStorage.setItem('selectedPolicy', JSON.stringify(policy));
        navigate(`/${selectedType}Policy?policyNo=${policy.policyNo}&policyName=${policy.policyName}&sumInsured=${policy.sumInsured}&premium=${policy.premium}&policyPeriod=${policy.policyPeriod}&type=${policy.coverageType.type}`);
        if (policy.coverageType.type === 'Family') {
            navigate(`/FamilyPolicy?policyNo=${policy.policyNo}&policyName=${policy.policyName}&sumInsured=${policy.sumInsured}&premium=${policy.premium}&policyPeriod=${policy.policyPeriod}&type=${policy.coverageType.type}`);
           
        } else if (policy.coverageType.type === 'Individual') {
            navigate(`/IndividualPolicy?policyNo=${policy.policyNo}&policyName=${policy.policyName}&sumInsured=${policy.sumInsured}&premium=${policy.premium}&policyPeriod=${policy.policyPeriod}&type=${policy.coverageType.type}`);
            
        }
        // navigate(`/Payment?policyNo=${policy.policyNo}&policyName=${policy.policyName}&sumInsured=${policy.sumInsured}&premium=${policy.premium}&policyPeriod=${policy.policyPeriod}&type=${policy.coverageType.type}`);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <Navbar2></Navbar2>
        <div className='policy-div'>
            <div className="lander-dropdowns-container">
            <select className="lander-select" onChange={handleTypeChange} value={selectedType}>
                    <option value="">Select Policy Type</option>
                    <option value="Individual">Individual</option>
                    <option value="Family">Family</option>
                </select>
                <select className="lander-select" onChange={handlePeriodChange} value={selectedPeriod}>
                    <option value="">Select Policy Period</option>
                    <option value="3 Years">3 Years</option>
                    <option value="5 Years">5 Years</option>
                    <option value="7 Years">7 Years</option>
                    <option value="12 Years">12 Years</option>
                </select>
                <select className="lander-select" onChange={handlePriceChange} value={selectedPrice}>
                    <option value="">Select Policy Price</option>
                    <option value="3 Lakh">3 Lakh</option>
                    <option value="5 Lakh">5 Lakh</option>
                    <option value="7 Lakh">7 Lakh</option>
                    <option value="12 Lakh">12 Lakh</option>
                </select>
                
            </div>
            <div className="lander-card-container">
                {policyData.map((curPost) => {
                    const { policyName, keyFeatures, sumInsured, premium, policyNo, policyPeriod, coverageType } = curPost;
                    const { type } = coverageType;

                    return (
                        <div className="lander-card" key={policyNo}>
                            <div className="lander-card-info">
                            <h2>Policy No: {policyNo}</h2>
                                <h2>Policy Name : {policyName}</h2>
                            </div>
                            <p><strong>Key Features :</strong> {keyFeatures}</p>
                            <div className="lander-policy-info">
                                <div className="lander-policy-details">
                                    <p><strong>Sum Insured :</strong> {sumInsured}</p>
                                </div>
                                <div className="lander-policy-details">
                                    <p><strong>Premium :</strong> {premium}</p>
                                </div>
                            </div>
                            <div className="lander-policy-info">
                                <div className="lander-policy-details">
                                    <p><strong>Policy Period :</strong> {policyPeriod}</p>
                                </div>
                                <div className="lander-policy-details">
                                    <p><strong>Type :</strong> {type}</p>
                                </div>
                            </div>
                            <div className="lander-card-button">
                                <button className="lander-buy-button" color='lightgreen' onClick={()=> handleBuyPolicy(curPost)}>Buy Policy</button>
                            </div>

                            {/* (handleButtonClick)=> handleBuyPolicy(curPost) */}

                        </div>
                    );
                })}
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Lander;