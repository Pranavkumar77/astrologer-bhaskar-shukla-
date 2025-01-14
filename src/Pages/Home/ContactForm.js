// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${formData.name}`);
    // Here you would typically send formData to your server
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container" id="contactUs">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;