import React from "react";
import "./WhatsappIcon.css"; // Import the CSS file for styling

const WhatsAppChat = () => {
  const phoneNumber = "8055831831";
  const message = "Hello! I need assistance.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-chat"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Chat with us" />
    </a>
  );
};

export default WhatsAppChat;
