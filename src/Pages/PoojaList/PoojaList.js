import React, { useState } from "react";
import "./PoojaList.css";
import laxmi from "../../../src/Artifacts/laxmi.jpg";
import ganesha from "../../../src/Artifacts/ganesha.jpg";
import pitraDosh from "../../../src/Artifacts/pitraDosh.jpg";
import kaalsarpDosh from "../../../src/Artifacts/Kaal-Sarp-Dosh.jpg";
import mangalDosh from "../../../src/Artifacts/mangalDosh.jpg";
import shaniGrahShanti from "../../../src/Artifacts/shani-grah-puja.jpg";
import mahaRudrabhishek from "../../../src/Artifacts/maharudrabhishek.jpg";
import maaDurga from "../../../src/Artifacts/maa durga pooja.jpg";
import relationship from "../../../src/Artifacts/relationship.jpg";
import navgrahShant from "../../../src/Artifacts/navgrahShanti.png";
import baglamukhi from "../../../src/Artifacts/baglamukhi.jpg";
import rudrabhishekh from "../../../src/Artifacts/rudrabhishekh.png";
import mahaMrityunjaya from "../../../src/Artifacts/Maha-Mrityunjaya.jpg";
import santapPrapti from "../../../src/Artifacts/santapPrapti.jpg";
import karjaMukti from "../../../src/Artifacts/karja mukti.jpg";
import chandalyog from "../../../src/Artifacts/chandalyog.jpg";

const PoojaList = () => {
  const allPoojas = {
    GeneralPooja: [
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
        name: "Mangal Dosh Niwaran Pooja",
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
        src: baglamukhi,
      },
      {
        id: 12,
        name: "Rudrabhishekh Pooja",
        description: "Sacred Abhishek to please Lord Shiva.",
        src: rudrabhishekh,
      },
      {
        id: 13,
        name: "Mahamrutyunjay Pooja",
        description: "Ritual for health and overcoming challenges.",
        src: mahaMrityunjaya,
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
    ],
    VIP_E_Pooja: [
      {
        id: 17,
        name: "Online Pooja Consultancy",
        description: "Consultation for online pooja services.",
        src: "", // Add image source if available
      },
      {
        id: 18,
        name: "Surya Grahan Dosh Shanti Pooja",
        description: "Ritual to mitigate the effects of solar eclipse.",
        src: "", // Add image source if available
      },
      {
        id: 19,
        name: "Loan (Karz) Mukti Pooja",
        description: "Ritual for freedom from debts.",
        src: "", // Add image source if available
      },
      {
        id: 20,
        name: "Vish Dosh Shanti Pooja",
        description: "Ritual to nullify Vish Dosh effects.",
        src: "", // Add image source if available
      },
      {
        id: 21,
        name: "Sarv Grah Shanti Pooja",
        description: "Ritual for peace from all planets.",
        src: "", // Add image source if available
      },
      {
        id: 22,
        name: "Sudarshana Pooja",
        description: "Worship of Lord Sudarshana for protection.",
        src: "", // Add image source if available
      },
      {
        id: 23,
        name: "Navgrah Shanti Pooja",
        description: "Peaceful worship of nine planets.",
        src: "", // Add image source if available
      },
      {
        id: 24,
        name: "Mata Saraswati Pooja for Career Growth",
        description: "Worship of Goddess Saraswati for success in career.",
        src: "", // Add image source if available
      },
      {
        id: 25,
        name: "Pitra Dosh Shanti Pooja",
        description: "Ritual to pacify ancestral doshas.",
        src: "", // Add image source if available
      },
      {
        id: 26,
        name: "Kaal Bhairav Rog Mukti Pooja",
        description: "Worship of Kaal Bhairav for health issues.",
        src: "", // Add image source if available
      },
      {
        id: 27,
        name: "Vivah Badha Nivaran Pooja",
        description: "For resolving marriage obstacles.",
        src: "", // Add image source if available
      },
      {
        id: 28,
        name: "Shatru Badha Nivaran Pooja",
        description: "For overcoming enemies.",
        src: "", // Add image source if available
      },
      {
        id: 29,
        name: "Shani Grah Shanti Pooja",
        description: "To mitigate the effects of Saturn.",
        src: "", // Add image source if available
      },
      {
        id: 30,
        name: "Rahu & Ketu Graha Shanti Pooja",
        description: "To balance Rahu and Ketu's influence.",
        src: "", // Add image source if available
      },
      {
        id: 31,
        name: "Mangal Dosh Nivaran Pooja",
        description: "To pacify Mangal Dosh effects.",
        src: "", // Add image source if available
      },
      {
        id: 32,
        name: "Special Pooja for Relationship",
        description: "To improve relationships and harmony.",
        src: "", // Add image source if available
      },
      {
        id: 33,
        name: "Kaala Jadoo Nivaran Pooja",
        description: "To remove black magic effects.",
        src: "", // Add image source if available
      },
      {
        id: 34,
        name: "Grahan Dosh Shanti Pooja",
        description: "To mitigate eclipse-related doshas.",
        src: "", // Add image source if available
      },
      {
        id: 35,
        name: "Guru Chandal Dosh Nivaran Pooja",
        description: "To nullify Guru Chandal dosha",
        src: "", //Add image source if available
      },
      {
        id: 36,
        name: "Kaal Sarp Dosh Nivaran Pooja",
        description: "To alleviate Kaal Sarp dosha",
        src: "", //Add image source if available
      },
      {
        id: 37,
        name: "Maha Rudrabhishek Pooja",
        description: "For blessings from Lord Shiva",
        src: "", //Add image source if available
      },
    ],
    // Entries from VIP E-Pooja

    Evil_Eye_Removal_Pooja: [
      {
        id: 38,
        name: "Evil Eye (Nazar Lagna)",
        description: "Protection against evil eye",
        src: "", //Add image source if available
      },
      {
        id: 39,
        name: "Evil Eye (Nazar Lagna) for Pet",
        description: "Protection against evil eye for pets",
        src: "", //Add image source if available
      },
      {
        id: 40,
        name: "Evil Eye (Nazar Lagna) for Business",
        description: "Protection against evil eye in business",
        src: "", //Add image source if available
      },
      {
        id: 41,
        name: "Evil Eye (Nazar Lagna) for Finance",
        description: "Protection against evil eye in finances",
        src: "", //Add image source if available
      },
      {
        id: 42,
        name: "Evil Eye (Nazar Lagna) For Relationship",
        description: "Protection against evil eye in relationships",
        src: "", //Add image source if available
      },
      {
        id: 43,
        name: "Evil Eye (Nazar Lagna) for Career",
        description: "Protection against evil eye in career",
        src: "", //Add image source if available
      },
      {
        id: 44,
        name: "Evil Eye (Nazar Lagna) for Health",
        description: "Protection against evil eye in health matters",
        src: "", //Add image source if available
      },
      {
        id: 45,
        name: "Evil Eye (Nazar Lagna) for Family",
        description: "Protection against evil eye in family matters",
        src: "", //Add image source if available
      },
    ],
  };

  const [visiblePoojas, setVisiblePoojas] = useState(
    allPoojas.GeneralPooja.slice(0, 3)
  );
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("GeneralPooja");

  const handleViewAll = () => {
    setVisiblePoojas(allPoojas[selectedFilter]);
    setShowAll(true);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setShowAll(false);
    setVisiblePoojas(allPoojas[filter].slice(0, 3)); // Reset visible poojas based on selected filter
  };

  return (
    <div className="pooja-container" id="poojalist">
      <h2 className="pooja-title">Sacred Poojas & Rituals</h2>
      <p className="pooja-subtitle">
        Experience the divine power of traditional Vedic rituals performed with
        authentic procedures.
      </p>

      <div className="filter-section">
        <button
          className={`filter-button ${
            selectedFilter === "GeneralPooja" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("GeneralPooja")}
        >
          General Poojas
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "VIP_E_Pooja" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("VIP_E_Pooja")}
        >
          VIP E-Poojas
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Evil_Eye_Removal_Pooja" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("Evil_Eye_Removal_Pooja")}
        >
          Evil Eye Removal Pooja
        </button>
      </div>

      <div className="pooja-grid">
        {visiblePoojas.map((pooja) => (
          <div className="pooja-card" key={pooja.id}>
            {/* Uncomment below line if you want to show images */}
            {/* <img className="pooja-image" src={pooja.src} alt={pooja.name} /> */}
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
          <h3>Gemstone Consultation</h3>
          <p>
            Need a specific pooja for your unique requirements? We can customize
            rituals according to your needs.
          </p>
          <button className="enquire-now-button">Enquire Now</button>
        </div>

        {/* Online Pooj as Section */}
        <div className="online-pooja-section">
          <h3>Palmistry</h3>
          <p>
            Can't visit in person? Participate in live-streamed poojas from the
            comfort of your home.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="online-pooja-section">
          <h3>Kundali Matching</h3>
          <p>
            Can't visit in person? Participate in live-streamed poojas from the
            comfort of your home.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PoojaList;
