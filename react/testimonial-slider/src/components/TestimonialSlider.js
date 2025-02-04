import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    // name: "Dhiraj Lonkar",
     image: './images.jpeg',
    feedback: "This service was amazing! Highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    // name: "Pradnya Giram",
    image: "./img1.jpeg",
    feedback: "Great experience, will definitely use it again.",
    rating: 4,
  },
  {
    id: 3,
    // name: "Sanskruti Lonkar",
    image: "./img2.jpg",
    feedback: "Excellent support and great quality.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container">
      <motion.div
        key={testimonials[currentIndex].id}
        className="testimonial-card"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-image"
        />
        <h3>{testimonials[currentIndex].name}</h3>
        <p>{testimonials[currentIndex].feedback}</p>
        <div className="star-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < testimonials[currentIndex].rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>
      </motion.div>

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default TestimonialSlider;
