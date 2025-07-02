// client/src/components/AdminRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const AdminRoute = () => {
  const { user } = useContext(AuthContext);

  // Check if there is a user and if their role is 'admin'
  if (user && user.role === 'admin') {
    return <Outlet />; // If yes, render the child component (Admin Dashboard)
  } else {
    return <Navigate to="/" />; // If not, redirect to the home page
  }
};

export default AdminRoute;