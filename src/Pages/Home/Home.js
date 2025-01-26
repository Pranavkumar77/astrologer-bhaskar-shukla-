import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import React, { useEffect, useRef } from "react";
import "./Home.css";
import About from "../About/About";
import Profile from "../../Components/Profile/Profile";
import PoojaList from "../PoojaList/PoojaList";
import Products from "../Products/Products";
import Footer from "../../Components/Footer/Footer";
import astroChakra from "../../Artifacts/astroChakra.png"
import WhatsAppChat from "../../Components/WhatsappIcon/WhatsappIcon";


const Home = () => {
  return (
    <>
      <div className="astro-container">
        {/* First section (Find clarity) */}
        <div className="astro-card">
          <div className="astro-text">
            <h1>प्राचीन वैदिक ज्ञान के माध्यम से अपने भाग्य को अनलॉक करें</h1>
            <p>Embrace the wisdom of the stars to uncover your path forward.</p>
            <button className="consult-btn">Book Consultation</button>
          </div>
          <div className="astro-chakra">
            <img
              src={astroChakra}
              alt="Chakra Wheel"
            />
          </div>
        </div>
      </div>
      <Profile />
      <PoojaList />
      <Products />
      <Testimonials />
      <ContactForm />
      <WhatsAppChat />
      <Footer/>
    </>
  );
};

export default Home;
