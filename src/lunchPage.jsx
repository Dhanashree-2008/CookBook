import React from "react";
import "./lunch.css";
import { Link, useParams } from "react-router-dom";
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

export default function LunchPage() {
  const { id } = useParams();
  const lunch = lunchRecipes.filter((item) => item.category === "Lunch");

  // ✅ Detail view if `id` exists
  if (id !== undefined) {
    const recipe = lunch[id];
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

        <Link to="/lunch">
          <button className="back-btn">⬅ Back to Lunch</button>
        </Link>
      </div>
    );
  }

  // ✅ List view
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
