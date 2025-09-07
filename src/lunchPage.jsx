import React from "react";
import "./lunch.css";
import { Link } from "react-router-dom";
import lunchRecipes from "./data/lunch.json";

// Import lunch images
import pasta from "./assets/pasta.jpg";
import burger from "./assets/burger.jpg";
import pizza from "./assets/pizza.jpg";
import soup from "./assets/soup.jpg";
import curry from "./assets/curry.jpg";

import kebab from "./assets/kebab.jpg";

const imageMap = {
  "Pasta": pasta,
  "Burger": burger,
  "Pizza": pizza,
  "Soup": soup,
  "Curry": curry,
  "Kebab": kebab,
};

export default function lunchPage() {
  // Use the correct imported variable
  const lunch = lunchRecipes.filter(item => item.category === "Lunch");

  return (
    <div className="lunch-container">
      <h1 className="title">Lunch</h1>
      <div className="cards-grid">
        {lunch.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/lunch/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
