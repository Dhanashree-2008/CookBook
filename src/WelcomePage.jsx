import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WelcomePage.css";
import heroImg from "./assets/wpage.webp";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CookBook</div>
        <ul className="nav-links">
            <li><Link to="/about">About Us</Link></li>
          <li><Link to="/faqs">FAQS</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Spice Up Your Life:{" "}
            <span className="highlight">Authentic Indian Recipes</span>
          </h1>
          <p>
            Discover handpicked recipes, plan your meals, and enjoy Indian
            flavors like never before. From street food to royal thalis – all in
            one place.
          </p>

          {/* 👇 Get Started Button */}
          <button className="btn-black" onClick={() => navigate("/home")}>
            🚀 Get Started
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Indian Food" />
        </div>
      </section>
    </div>
  );
}
