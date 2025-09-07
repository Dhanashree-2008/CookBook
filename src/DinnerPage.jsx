import React from "react";
import "./Dinner.css"; // Reuse the same CSS as Lunch
import { Link } from "react-router-dom";
import dinnerRecipes from "./data/Dinner.json";

// Import dinner images
import paneerButterMasala from "./assets/paneerbuttermasala.jpg";
import spaghettiBolognese from "./assets/spaghettibolognese.jpg";
import vegetableStirFry from "./assets/vegetablestirfry.jpg";
import grilledChicken from "./assets/grilledchicken.jpg";
import grilledFish from "./assets/grilledfish.jpg";

const imageMap = {
  "Paneer Butter Masala": paneerButterMasala,
  "Spaghetti Bolognese": spaghettiBolognese,
  "Vegetable Stir Fry": vegetableStirFry,
  "Grilled Chicken": grilledChicken,
  "Grilled Fish": grilledFish,
};

export default function DinnerPage() {
  // Filter only Dinner recipes (optional if Dinner.json has only Dinner)
  const dinner = dinnerRecipes.filter(item => item.category === "Dinner");

  return (
    <div className="lunch-container"> {/* Use same class as Lunch */}
      <h1 className="title">Dinner</h1>
      <div className="cards-grid">
        {dinner.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/dinner/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
