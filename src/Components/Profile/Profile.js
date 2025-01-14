import React from "react";
import "./Profile.css";
import bhaskarPhoto from "../../Artifacts/bhaskarPhoto.png";

const Profile = () => {
  return (
    <div id="about" className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            style={{
              width: "40%" /* Ensures the image fills the width of the card */,
              height: "20%" /* Maintains the aspect ratio */,
              borderRadius:
                " 8px" /* Adds rounded corners to match the card design */,
              objectFit:
                "contain" /* Ensures the image covers the container without distortion */,
              display: "inline",
              background: "none",
            }}
            src={bhaskarPhoto}
            alt="Aaacharya Bhaskar Shukla"
          />
          <h2 className="profile-name">Aacharya Bhaskar Shukla</h2>
          <p className="profile-description">
            With over 25 years of experience in Vedic astrology and spiritual
            practices, I have dedicated my life to helping people find their
            path through ancient wisdom.
          </p>
          <div className="profile-tags">
            <span>🔸 Certified Vedic Astrologer</span>
            <span>🔸 Expert in Vastu Shastra</span>
          </div>
        </div>
      </div>
      <div className="expertise-card">
        <div className="expertise-section">
          <h3 className="section-title">My Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-item">
              <span role="img" aria-label="sacred-poojas">
                🔥
              </span>
              <p>Sacred Poojas</p>
              <p>Traditional rituals for peace and prosperity</p>
            </div>
            <div className="expertise-item">
              <span role="img" aria-label="spiritual-healing">
                ✨
              </span>
              <p>Spiritual Healing</p>
              <p>Ancient remedies for modern problems</p>
            </div>
            <div className="expertise-item">
              <span role="img" aria-label="horoscope-reading">
                🌟
              </span>
              <p>Horoscope Reading</p>
              <p>Detailed birth chart analysis</p>
            </div>
            <div className="expertise-item">
              <span role="img" aria-label="vastu-consultation">
                🏛️
              </span>
              <p>Vastu Consultation</p>
              <p>Harmonize your living spaces</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <p className="mission-statement">
            "My mission is to guide individuals towards spiritual enlightenment
            and help them overcome life's challenges through ancient Vedic
            wisdom."
          </p>
        </div>

        <div className="experience-stats">
          <div>
            <h4>25+</h4>
            <p>Years Experience</p>
          </div>
          <div>
            <h4>10k+</h4>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h4>1000+</h4>
            <p>Rituals Performed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
