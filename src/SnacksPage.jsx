import React from "react";
import "./Snacks.css"; 
import { Link, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const snacks = snackRecipes.filter((item) => item.category === "Snacks");

  // ✅ Detail page if ID exists
  if (id !== undefined) {
    const recipe = snacks[id];
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

        <Link to="/snacks">
          <button className="back-btn">⬅ Back to Snacks</button>
        </Link>
      </div>
    );
  }

  // ✅ List page
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
