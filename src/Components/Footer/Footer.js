// Footer.js
import React from 'react';
import './Footer.css'; // Add your styles here

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aacharya Bhaskar Shukla. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;