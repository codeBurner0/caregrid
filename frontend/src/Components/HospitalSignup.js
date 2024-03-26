// HospitalSignupForm.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './HospitalSignupForm.css';

const HospitalSignupForm = () => {
  const [hospitalData, setHospitalData] = useState({
    hospitalId: '',
    hospitalName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({ ...hospitalData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post('/api/hospitals/signup', hospitalData);

      // Handle the response as needed
      console.log('Server Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Hospital Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields based on hospitalData */}
        {Object.keys(hospitalData).map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field}</label>
            <input
              type="text"
              id={field}
              name={field}
              value={hospitalData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default HospitalSignupForm;
