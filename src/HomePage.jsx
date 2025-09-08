import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

import breakfastImg from "./assets/breakfast.jpg";
import lunchImg from "./assets/lunch.jpg";
import dinnerImg from "./assets/dinner.jpg";
import drinksImg from "./assets/drinks.jpg";
import snacksImg from "./assets/snacks.jpg";
import saladsImg from "./assets/desserts.jpg"; // ✅ keep this as is

const mealItems = [
  {
    category: "Morning Meals",
    title: "Breakfast",
    image: breakfastImg,
    path: "/breakfast",
  },
  {
    category: "Afternoon Specials",
    title: "Lunch",
    image: lunchImg,
    path: "/lunch",
  },
  {
    category: "Evening Treats",
    title: "Dinner",
    image: dinnerImg,
    path: "/dinner",
  },
  {
    category: "Refreshing",
    title: "Drinks",
    image: drinksImg,
    path: "/drinks",
  },
  {
    category: "Quick Bites",
    title: "Snacks",
    image: snacksImg,
    path: "/snacks",
  },
  {
    category: "Sweet Treats",
    title: "Desserts",   // ✅ plural
    image: saladsImg,    // ✅ keep your existing variable
    path: "/desserts",   // ✅ plural to match App.js route
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Recipe Hub</h1>
      <div className="home-grid">
        {mealItems.map((item, index) => (
          <div
            key={index}
            className="home-card"
            onClick={() => navigate(item.path)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="home-card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="home-card-title">{item.title}</h2>
            <button className="view-btn">View Recipes</button>
          </div>
        ))}
      </div>
    </div>
  );
}
