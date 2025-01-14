import React, { useState } from "react";
import "./PoojaList.css";
import laxmi from "../../../src/Artifacts/laxmi.jpg"
import ganesha from "../../../src/Artifacts/ganesha.jpg"
import pitraDosh from "../../../src/Artifacts/pitraDosh.jpg"
import kaalsarpDosh from "../../../src/Artifacts/Kaal-Sarp-Dosh.jpg"
import mangalDosh from "../../../src/Artifacts/mangalDosh.jpg"
import shaniGrahShanti from "../../../src/Artifacts/shani-grah-puja.jpg"
import mahaRudrabhishek from "../../../src/Artifacts/maharudrabhishek.jpg"
import maaDurga from "../../../src/Artifacts/maa durga pooja.jpg"
import relationship from "../../../src/Artifacts/relationship.jpg"
import navgrahShant from "../../../src/Artifacts/navgrahShanti.png"
import baglamukhi from "../../../src/Artifacts/baglamukhi.jpg"
import rudrabhishekh from "../../../src/Artifacts/rudrabhishekh.png"
import mahaMrityunjaya from "../../../src/Artifacts/Maha-Mrityunjaya.jpg"
import santapPrapti from "../../../src/Artifacts/santapPrapti.jpg"
import karjaMukti from "../../../src/Artifacts/karja mukti.jpg"
import chandalyog from "../../../src/Artifacts/chandalyog.jpg"


const PoojaList = () => {
  const poojas = [
    {
      id: 1,
      name: "Ganesh Pooja",
      description: "Powerful ritual to invoke blessings of Lord Ganesha.",
      src: ganesha,
    },
    {
      id: 2,
      name: "Laxmi Prapti Pooja",
      description: "Ritual for prosperity and financial growth.",
      src: laxmi,
    },
    {
      id: 3,
      name: "Pitra Dosh Niwaran",
      description: "Ritual to pacify ancestral doshas.",
      src: pitraDosh,
    },
    {
      id: 4,
      name: "Kaal Sarpdosh Niwaran",
      description: "Ritual to nullify the effects of Kaal Sarp Dosha.",
      src: kaalsarpDosh,
    },
    {
      id: 5,
      name: "Magal Dosh Niwaran Pooja",
      description: "Ritual to pacify Mangal dosh.",
      src: mangalDosh,
    },
    {
      id: 6,
      name: "Shani-grah Shanti Pooja",
      description: "Ritual to pacify the malefic effects of Saturn.",
      src: shaniGrahShanti,
    },
    {
      id: 7,
      name: "Maharudrabhishekh",
      description: "Sacred Abhishek to Lord Shiva for peace and prosperity.",
      src: mahaRudrabhishek,
    },
    {
      id: 8,
      name: "Maa Durha Pooja",
      description: "Ritual for dosha niwaran and wealth attainment.",
      src: maaDurga,
    },
    {
      id: 9,
      name: "Special Pooja for Relationship",
      description: "Ritual to improve relationships and harmony.",
      src: relationship,
    },
    {
      id: 10,
      name: "Navgrah Shanti Pooja",
      description: "Ritual for planetary peace and prosperity.",
      src: navgrahShant,
    },
    {
      id: 11,
      name: "Baglamukhi Pooja",
      description: "Ritual for victory over enemies.",
      src: baglamukhi
    },
    {
      id: 12,
      name: "Rudrabhishekh Pooja",
      description: "Sacred Abhishek to please Lord Shiva.",
      src: rudrabhishekh
    },
    {
      id: 13,
      name: "Mahamrutyunjay Pooja",
      description: "Ritual for health and overcoming challenges.",
      src: mahaMrityunjaya
    },
    {
      id: 14,
      name: "Santan Prapti Pooja",
      description: "Ritual for blessings of children.",
      src: santapPrapti,
    },
    {
      id: 15,
      name: "Karja Mukti Pooja",
      description: "Ritual to achieve freedom from debts.",
      src: karjaMukti,
    },
    {
      id: 16,
      name: "Guru Chandal Dosh Niwaran Pooja",
      description: "Ritual to nullify Guru-Chandal dosha.",
      src: chandalyog,
    },
  ];

  const [visiblePoojas, setVisiblePoojas] = useState(poojas.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setVisiblePoojas(poojas);
    setShowAll(true);
  };

  return (
    <div className="pooja-container" id="poojalist">
      <h2 className="pooja-title">Sacred Poojas & Rituals</h2>
      <p className="pooja-subtitle">
        Experience the divine power of traditional Vedic rituals performed with authentic procedures.
      </p>

      <div className="pooja-grid">
        {visiblePoojas.map((pooja) => (
          <div className="pooja-card" key={pooja.id}>
            <img className="pooja-image" src={pooja.src} alt={pooja.name} />
            <h3 className="pooja-name">{pooja.name}</h3>
            <p className="pooja-description">{pooja.description}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="view-all-poojas" onClick={handleViewAll}>
          View All Poojas →
        </button>
      )}

      {/* Custom Poojas Section */}
      <div className="custom-online-container">
      <div className="custom-pooja-section">
        <h3>Custom Poojas</h3>
        <p>
          Need a specific pooja for your unique requirements? We can customize rituals according to your needs.
        </p>
        <button className="enquire-now-button">Enquire Now</button>
      </div>

      {/* Online Poojas Section */}
      <div className="online-pooja-section">
        <h3>Online Poojas</h3>
        <p>
          Can't visit in person? Participate in live-streamed poojas from the comfort of your home.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      </div>
    </div>
  );
};

export default PoojaList;
