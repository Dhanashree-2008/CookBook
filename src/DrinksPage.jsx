import React from "react";
import "./Drinks.css"; 
import { Link, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const drinks = drinkRecipes.filter(item => item.category === "Drinks");

  // ✅ If we are on a detail page (/drinks/:id)
  if (id !== undefined) {
    const recipe = drinks[id];
    if (!recipe) return <h2>Recipe not found</h2>;

    return (
      <div className="recipe-detail">
        <h1>{recipe.title}</h1>
        <p><b>Category:</b> {recipe.category}</p>
        <p><b>Time:</b> {recipe.time}</p>

        <div className="recipe-sections">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="procedure">
            <h3>Procedure</h3>
            <ol>
              {recipe.procedure.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <Link to="/drinks">
          <button className="back-btn">⬅ Back to Drinks</button>
        </Link>
      </div>
    );
  }

  // ✅ List page (/drinks)
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
