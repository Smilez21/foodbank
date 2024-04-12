import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const Index = () => {
  return (
    <Router>
      <div className="overflow-x-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Index;
