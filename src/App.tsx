import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Landing from "./components/landing";
import Header from "./components/header";
import Features from "./components/features";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-auto">
        <Header />
        <Landing />
        <About />
        {/* <Features /> */}
        <Testimonial />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
