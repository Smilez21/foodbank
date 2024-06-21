import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
 
  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // If username is not found in local storage, redirect to login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Redirect to login page upon logout
    navigate("/");
  }; 

  return (
    <div className="">
      <div className="">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <p>Hello {username}, <span className="text-xl font-bold mb-4">welcome</span></p> 
        <button
          onClick={handleLogout}  
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"  
        > 
          Logout 
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
