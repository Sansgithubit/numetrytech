import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.length < 10)
      errors.message = "Message must be at least 10 characters";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="text-danger">{errors.message}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
