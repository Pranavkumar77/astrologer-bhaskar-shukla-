// Testimonials.js
import React from 'react';
import './Testimonials.css'; // Import the CSS for styling

const testimonialsData = [
  {
    name: "Alice Johnson",
    quote: "The astrology readings transformed my life! Highly recommend!",
    photo: "https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg" // Placeholder image
  },
  {
    name: "Bob Smith",
    quote: "Accurate predictions and great insights into my future.",
    photo: "https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg"
  },
  {
    name: "Catherine Lee",
    quote: "A wonderful experience! The guidance was spot on.",
    photo: "https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <img src={testimonial.photo} alt={testimonial.name} />
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;