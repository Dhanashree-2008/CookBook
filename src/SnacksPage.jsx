import React from "react";
import "./Snacks.css"; // You can reuse Lunch.css if styles are same
import { Link } from "react-router-dom";
import snackRecipes from "./data/Snacks.json";

// Import snack images
import samosa from "./assets/samosa.jpg";
import nachos from "./assets/nachos.jpg";
import springRolls from "./assets/springrolls.jpg";

const imageMap = {
  "Samosa": samosa,
  "Nachos": nachos,
  "Spring Rolls": springRolls,
};

export default function SnacksPage() {
  const snacks = snackRecipes.filter(item => item.category === "Snacks");

  return (
    <div className="lunch-container"> {/* Reuse Lunch CSS */}
      <h1 className="title">Snacks</h1>
      <div className="cards-grid">
        {snacks.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/snacks/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
