import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    // Redirect to login page upon logout
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
