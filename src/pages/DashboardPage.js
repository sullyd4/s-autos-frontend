// client/src/pages/DashboardPage.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  // The user object will be null if not logged in
  if (!user) {
    return <p>Loading...</p>; // Or a redirect, but ProtectedRoute handles that
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Your Dashboard, {user.firstName}</h1>
      <p>This is a protected area, only visible to logged-in users.</p>
      <p>Your registered email is: {user.email}</p>
    </div>
  );
};

export default DashboardPage;