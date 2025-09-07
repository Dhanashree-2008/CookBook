import React from "react";
import "./AboutUs.css";

// replace these with your own images later
import friend1 from "./assets/prapti.jpg";
import friend2 from "./assets/Antara.jpg";
import friend3 from "./assets/Dhanashree.jpg";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <span className="highlight">CookBook</span>! We are three friends
        who share a love for food, creativity, and a good laugh. What started as
        random cooking experiments together slowly grew into this project —
        a place where food isn’t just recipes, it’s stories and memories.
      </p>
      <p>
        Our mission is to make cooking fun, approachable, and meaningful.
        Whether you’re new in the kitchen or already a master chef, we want to
        give you step-by-step guides, delicious meal ideas, and the motivation
        to keep exploring flavors. From quick bites to royal thalis — CookBook
        is designed to be your digital kitchen buddy.
      </p>

      {/* Vision & Mission */}
      <div className="vision-section">
        <h2>✨ Our Vision</h2>
        <p>
          To create a space where food brings people together — celebrating
          culture, creativity, and connection through cooking.
        </p>

        <h2>🚀 Our Mission</h2>
        <ul>
          <li>Provide beginner-friendly and expert-level recipes.</li>
          <li>Celebrate diversity through regional and global cuisines.</li>
          <li>Make tools like planners & shopping lists available for users.</li>
          <li>Build a friendly foodie community online.</li>
        </ul>
      </div>

      {/* 👇 Team Section */}
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src={friend1} alt="Prapti" />
          <h3>Prapti Patil</h3>
          <p>The Visionary 🌟</p>
        </div>

        <div className="team-card">
          <img src={friend2} alt="Antara" />
          <h3>Antara Rane</h3>
          <p>The Creative Soul 🎨</p>
        </div>

        <div className="team-card">
          <img src={friend3} alt="Dhanashree" />
          <h3>Dhanashree Khambal</h3>
          <p>The Foodie 🍕</p>
        </div>
      </div>
    </div>
  );
}
