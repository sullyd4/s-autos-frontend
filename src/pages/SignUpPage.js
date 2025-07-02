// client/src/pages/SignUpPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import toast from 'react-hot-toast';
import './SignUpPage.css';
import S_S_Logo from '../assets/ss-autos-logo.png';

// GoogleIcon component remains the same
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.999,36.43,44,30.854,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);


const SignUpPage = () => {
  // Hook to navigate the user after successful signup
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Function to update state when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    console.log('Submit button clicked!');
    e.preventDefault(); // Prevent default form submission

    try {
      // Send a POST request to the backend signup endpoint
      const response = await API.post('/api/auth/signup', formData); 
      // Handle success
      toast.success(response.data.message); // Show success message
      navigate('/signin'); // Redirect to sign-in page

    } catch (error) {
      // Handle errors (e.g., user already exists)
      toast.error(error.response.data.message || 'An error occurred.');
      console.error('Signup Error:', error.response.data);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-section">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <p className="form-subheading">Join the most exclusive automotive network.</p>
          
          {/* Attach the handleSubmit function to the form's onSubmit event */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                {/* Connect input to state */}
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                {/* Connect input to state */}
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              {/* Connect input to state */}
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              {/* Connect input to state */}
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
            
            <div className="separator">or</div>

            <button type="button" className="btn btn-google">
              <GoogleIcon />
              <span>Sign Up with Google</span>
            </button>
          </form>

          <p className="auth-link">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
      <div className="signup-brand-section">
        <img src={S_S_Logo} alt="S&S Autos Logo" className="brand-logo" />
        <p className="brand-tagline">Prestige on Every Mile.</p>
      </div>
    </div>
  );
};

export default SignUpPage;