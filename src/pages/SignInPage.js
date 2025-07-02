// client/src/pages/SignInPage.js

import React, { useState, useContext } from 'react'; // Import useContext
import { useNavigate } from 'react-router-dom';
import API from '../api';
import toast from 'react-hot-toast';
import AuthContext from '../context/AuthContext'; // Import our new context
import './SignUpPage.css';
import S_S_Logo from '../assets/ss-autos-logo.png';

const SignInPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get the login function from the context

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await API.post('/api/auth/signin', formData); 
      
      // Use the context's login function
      login(response.data.user, response.data.token);

      toast.success('Logged in successfully!');
      navigate('/'); 

    } catch (error) {
        toast.error(error.response.data.message || 'An error occurred.');
      console.error('Signin Error:', error.response.data);
    }
  };

  // ... the rest of your JSX return statement remains exactly the same
  return (
    <div className="signup-container">
        {/* ... all the JSX code ... */}
        <div className="signup-form-section">
            <div className="form-wrapper">
                <h2>Sign In</h2>
                <p className="form-subheading">Welcome back to the network.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <p className="auth-link">
                    Don't have an account? <a href="/signup">Sign Up</a>
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

export default SignInPage;