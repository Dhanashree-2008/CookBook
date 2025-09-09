import React, { useState } from "react";
import allRecipes from "./data/allRecipes.json";
import "./FindByIngredients.css";

export default function FindByIngredients() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const ingredients = input
      .toLowerCase()
      .split(",")
      .map((ing) => ing.trim())
      .filter((ing) => ing);

    if (ingredients.length === 0) {
      setResults([]);
      return;
    }


    const matches = allRecipes.filter((recipe) =>
      ingredients.every((ing) =>
        recipe.procedure.join(" ").toLowerCase().includes(ing)
      )
    );

    setResults(matches);
  };

  return (
    <div className="ingredients-container">
      <h1 className="ingredients-title">Find Recipes by Ingredients</h1>
      <p className="ingredients-subtitle">
        Enter ingredients you have (comma separated). Example: <b>tomato, onion</b>
      </p>

      <div className="ingredients-input-group">
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ingredients-input"
        />
        <button onClick={handleSearch} className="ingredients-btn">
          Search
        </button>
      </div>

      <div className="ingredients-results">
        {results.length > 0 ? (
          results.map((recipe, idx) => (
            <div key={idx} className="ingredients-card">
              <h2>{recipe.title}</h2>
              <p><b>Category:</b> {recipe.category}</p>
              <p><b>Time:</b> {recipe.time}</p>
              <h3>Procedure:</h3>
              <ol>
                {recipe.procedure.map((step, stepIdx) => (
                  <li key={stepIdx}>{step}</li>
                ))}
              </ol>
            </div>
          ))
        ) : (
          <p className="no-results">No recipes found. Try different ingredients.</p>
        )}
      </div>
    </div>
  );
}
