import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "./data/recipes.json"; 
import "./RecipePage.css";

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

export default function RecipePage() {
  const { id } = useParams();
  const recipeIndex = Number(id);
  const recipe = recipes[recipeIndex];

  if (!recipe) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Recipe not found
      </h2>
    );
  }

  return (
    <div className="recipe-container">
      <div
        className="recipe-banner"
        style={{ backgroundImage: `url(${imageMap[recipe.title]})` }}
      ></div>

      <h1>{recipe.title}</h1>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time}</p>
      <h3>Procedure</h3>
      <p>{recipe.procedure}</p>
      <Link to="/breakfast" className="back-btn">
        Back to Breakfast
      </Link>
    </div>
  );
}
