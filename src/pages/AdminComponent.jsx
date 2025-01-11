import React, { useState, useEffect } from 'react';

const AdminComponent = () => {
  // Admin Login States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  // Influencer Management States
  const [influencerId, setInfluencerId] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  // Hardcoded credentials
  const adminCredentials = {
    username: 'admin123',
    password: 'adminpassword',
  };

  // Effect hook to check if user is authenticated when the component mounts
  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login functionality
  const handleLogin = () => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle Update Status for Influencer
  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}/api/influencers/update_status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: influencerId,
          status: status,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message);
        setError('');
      } else if (response.status === 404) {
        setMessage('');
        setError(data.error);
      }
    } catch (error) {
      setMessage('');
      setError('Something went wrong!');
    }
  };

  // If user is authenticated, render the admin panel; otherwise, show the login form
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Admin Login</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 px-4 py-2 w-full rounded mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 w-full rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container flex justify-center items-center h-screen bg-gradient-to-b from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Admin Panel</h1>

        {/* Update Influencer Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Update Influencer Status</h2>
          <input
            type="text"
            value={influencerId}
            onChange={(e) => setInfluencerId(e.target.value)}
            placeholder="Influencer ID"
            className="border border-gray-300 px-4 py-2 mb-4 w-full rounded"
          />
          <select
            onChange={(e) => setStatus(e.target.value === 'true')}
            className="border border-gray-300 px-4 py-2 mb-4 w-full rounded"
          >
            <option value="">Select Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <button
            onClick={handleUpdateStatus}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Update Status
          </button>
          {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
