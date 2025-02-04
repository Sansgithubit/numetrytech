import React from "react";
import TestimonialSlider from "./components/TestimonialSlider";
import "./components/TestimonialSlider.css";

function App() {
  return (
    <div className="App">
      <marquee><h1>Client Testimonials</h1></marquee>
      <TestimonialSlider />
    </div>
  );
}

export default App;
