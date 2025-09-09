import React from "react";
import "./Breakfast.css";
import { Link, useParams } from "react-router-dom";
import recipes from "./data/Breakfast.json";

// ✅ Import breakfast images
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
  const { id } = useParams(); // check if recipe id is in URL
  const breakfastRecipes = recipes.filter(
    (item) => item.category === "Breakfast"
  );

  // ✅ If an ID is present → show detail view
  if (id !== undefined) {
    const recipe = breakfastRecipes[id];
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

        <Link to="/breakfast">
          <button className="back-btn">⬅ Back to Breakfast</button>
        </Link>
      </div>
    );
  }

  // ✅ Otherwise → show all breakfast recipes
  return (
    <div className="breakfast-container">
      <h1 className="title">Breakfast</h1>
      <div className="cards-grid">
        {breakfastRecipes.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/breakfast/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
