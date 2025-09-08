import React from "react";
import "./Desserts.css"; 
import { Link } from "react-router-dom";
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
  const desserts = dessertRecipes.filter(item => item.category === "Desserts");

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
