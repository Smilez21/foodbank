import React from "react";
import About from "./about";
import Landing from "./landing";
import Header from "./header";
import Features from "./features";
import Testimonial from "./testimonial";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div>
      {" "}
      <Header />
      <Landing />
      <About />
      {/* <Features /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
