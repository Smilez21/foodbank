// Signup.js

import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = () => {
    // Check if username, password, and phone number are not empty
    if (username.trim() !== '' && password.trim() !== '' && phoneNumber.trim() !== '') {
      // Save user to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('phoneNumber', phoneNumber);
      // Redirect to login
      window.location.href = '/login';
    } else {
      alert('Please enter valid username, password, and phone number');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 mb-4 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 mb-4 w-full"
      />
      <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 rounded">
        Signup
      </button>
    </div>
  );
};

export default Signup;
