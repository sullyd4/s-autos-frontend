// client/src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  // 1. Wait until the loading check is complete
  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  // 2. Once loading is false, check for the user
  if (!user) {
    return <Navigate to="/signin" />;
  }

  // 3. If loading is false and there is a user, show the page
  return <Outlet />;
};

export default ProtectedRoute;