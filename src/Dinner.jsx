import React from "react";
import "./Dinner.css";
import { Link } from "react-router-dom";

// Import images from src/assets
import appleBreakfast from "./assets/apple-cinnamon-roll.jpg";
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

const breakfastItems = [
  {
    category: "Desserts",
    title: "Apple Cinnamon Rolls",
    time: "65 mins",
    image: appleBreakfast,
  },
  {
    category: "For Two",
    title: "Plantain Fritata",
    time: "30 mins",
    image: plantainFritata,
  },
  {
    category: "Side Dishes",
    title: "Air Frier Hash Browns",
    time: "23 mins",
    image: hashBrowns,
  },
  {
    category: "Desserts",
    title: "Cinnamon Swirl Bread",
    time: "60 mins",
    image: cinnamonBread,
  },
  {
    category: "Appetizers",
    title: "Mediterranean Dip",
    time: "15 mins",
    image: mediterraneanDip,
  },
  {
    category: "Soups",
    title: "Creamy Soup",
    time: "40 mins",
    image: creamysoup,
  },
  {
    category: "Breakfast",
    title: "Fluffy Pancakes",
    time: "25 mins",
    image: pancakes,
  },
  {
    category: "Drinks",
    title: "Fruit Smoothie",
    time: "10 mins",
    image: smoothie,
  },
  {
    category: "Quick Meals",
    title: "Avocado Toast",
    time: "15 mins",
    image: avocadoToast,
  },
  {
    category: "Breakfast",
    title: "Classic Waffles",
    time: "30 mins",
    image: waffles,
  },
  {
    category: "Healthy",
    title: "Granola Bowl",
    time: "12 mins",
    image: granolaBowl,
  },
  {
    category: "Sandwiches",
    title: "Bagel Sandwich",
    time: "20 mins",
    image: bagelSandwich,
  },
  {
    category: "Desserts",
    title: "French Toast",
    time: "25 mins",
    image: frenchToast,
  },
];

export default function DinnerPage() {
  return (
    <div className="dinner-container">
      <h1 className="title">Dinner</h1>
      <div className="cards-grid">
        {breakfastItems.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            {/* Link for future recipe pages */}
            <Link to={`/dinner/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
