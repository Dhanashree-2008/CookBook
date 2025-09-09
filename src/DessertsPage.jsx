import React from "react";
import "./Desserts.css"; 
import { Link, useParams } from "react-router-dom";
import dessertRecipes from "./data/Desserts.json";

// Import dessert images
import chocolatecake from "./assets/chocolatecake.jpg";
import icecream from "./assets/icecream.jpg";
import brownies from "./assets/brownies.jpg";
import cheesecake from "./assets/cheesecake.jpg";
import fruittart from "./assets/fruittart.jpg";

const imageMap = {
  "Chocolate Cake": chocolatecake,
  "Ice Cream": icecream,
  "Brownies": brownies,
  "Cheesecake": cheesecake,
  "Fruit Tart": fruittart,
};

export default function DessertsPage() {
  const { id } = useParams();
  const desserts = dessertRecipes.filter(item => item.category === "Desserts");

  // ✅ If user is viewing a single recipe (/desserts/:id)
  if (id !== undefined) {
    const recipe = desserts[id];
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

        <Link to="/desserts">
          <button className="back-btn">⬅ Back to Desserts</button>
        </Link>
      </div>
    );
  }

  // ✅ List page (/desserts)
  return (
    <div className="lunch-container">
      <h1 className="title">Desserts</h1>
      <div className="cards-grid">
        {desserts.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imageMap[item.title]}
              alt={item.title}
              className="card-image"
            />
            <p className="category">{item.category.toUpperCase()}</p>
            <h2 className="card-title">{item.title}</h2>
            <p className="time">{item.time}</p>
            <Link to={`/desserts/${index}`}>
              <button className="view-btn">View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
