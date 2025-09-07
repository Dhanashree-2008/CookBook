import React from "react";
import "./Drinks.css"; // You can reuse Lunch.css if needed
import { Link } from "react-router-dom";
import drinkRecipes from "./data/Drinks.json";

// Import drink images
import mojito from "./assets/mojito.jpg";
import mangoLassi from "./assets/mangolassi.jpg";
import icedCoffee from "./assets/icedcoffee.jpg";
import lemonade from "./assets/lemonade.jpg";
import greenSmoothie from "./assets/greensmoothie.jpg";

const imageMap = {
  "Classic Mojito": mojito,
  "Mango Lassi": mangoLassi,
  "Iced Coffee": icedCoffee,
  "Fresh Lemonade": lemonade,
  "Green Smoothie": greenSmoothie,
};

export default function DrinksPage() {
  // Filter only Drinks recipes (optional since Drinks.json already has only Drinks)
  const drinks = drinkRecipes.filter(item => item.category === "Drinks");

  return (
    <div className="lunch-container"> {/* Reuse Lunch CSS */}
      <h1 className="title">Drinks</h1>
      <div className="cards-grid">
        {drinks.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/drinks/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
