import React from "react";
import "./Dinner.css"; // Reuse the same CSS as Lunch
import { Link, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const dinner = dinnerRecipes.filter((item) => item.category === "Dinner");

  // ✅ Detail view if `id` is present
  if (id !== undefined) {
    const recipe = dinner[id];
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

        <Link to="/dinner">
          <button className="back-btn">⬅ Back to Dinner</button>
        </Link>
      </div>
    );
  }

  // ✅ List view
  return (
    <div className="lunch-container"> {/* Using same CSS as Lunch */}
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
