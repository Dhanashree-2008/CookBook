import React from "react";
import "./Breakfast.css";
import { Link } from "react-router-dom";
import recipes from "./data/recipes.json"; // ✅ fixed path

// Images
import appleBreakfast from "./assets/apple.jpg";
import plantainFritata from "./assets/Frittata-V2.jpg";
import hashBrowns from "./assets/hashbrowns.jpg";
import cinnamonBread from "./assets/cinnamon-Bread.jpg";
import mediterraneanDip from "./assets/mdip.jpg";
import creamysoup from "./assets/tomato-soup.jpg";
import pancakes from "./assets/pancakes.jpg";
import smoothie from "./assets/smoothie.jpg";
import avocadoToast from "./assets/avacadotoast.jpg";
import waffles from "./assets/waffles.jpg";
import granolaBowl from "./assets/granola.jpg";
import bagelSandwich from "./assets/Bagel-Breakfast-Sandwiches-sq.jpg";
import frenchToast from "./assets/french.jpg";

const imageMap = {
  "Apple Cinnamon Rolls": appleBreakfast,
  "Plantain Fritata": plantainFritata,
  "Air Frier Hash Browns": hashBrowns,
  "Cinnamon Swirl Bread": cinnamonBread,
  "Mediterranean Dip": mediterraneanDip,
  "Creamy Soup": creamysoup,
  "Fluffy Pancakes": pancakes,
  "Fruit Smoothie": smoothie,
  "Avocado Toast": avocadoToast,
  "Classic Waffles": waffles,
  "Granola Bowl": granolaBowl,
  "Bagel Sandwich": bagelSandwich,
  "French Toast": frenchToast,
};

export default function BreakfastPage() {
  return (
    <div className="breakfast-container">
      <h1 className="title">Breakfast</h1>
      <div className="cards-grid">
        {recipes.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/breakfast/${index}`}>   {/* ✅ fixed route */}
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
