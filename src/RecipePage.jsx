import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

// Import JSON files
import breakfastRecipes from "./data/Breakfast.json"; 
import lunchRecipes from "./data/lunch.json";
import dinnerRecipes from "./data/Dinner.json";
import drinkRecipes from "./data/Drinks.json";
import snackRecipes from "./data/Snacks.json";
import dessertRecipes from "./data/Desserts.json";

// Import images
// Breakfast
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

// Lunch
import pasta from "./assets/pasta.jpg";
import burger from "./assets/burger.jpg";
import pizza from "./assets/pizza.jpg";
import soup from "./assets/soup.jpg";
import curry from "./assets/curry.jpg";
import kebab from "./assets/kebab.jpg";

// Dinner
import paneerButterMasala from "./assets/paneerbuttermasala.jpg";
import spaghettiBolognese from "./assets/spaghettibolognese.jpg";
import vegetableStirFry from "./assets/vegetablestirfry.jpg";
import grilledChicken from "./assets/grilledchicken.jpg";
import grilledFish from "./assets/grilledfish.jpg";

// Drinks
import mojito from "./assets/mojito.jpg";
import mangoLassi from "./assets/mangolassi.jpg";
import icedCoffee from "./assets/icedcoffee.jpg";
import lemonade from "./assets/lemonade.jpg";
import greenSmoothie from "./assets/greensmoothie.jpg";

// Snacks
import samosa from "./assets/samosa.jpg";
import nachos from "./assets/nachos.jpg";
import springRolls from "./assets/springrolls.jpg";

// Desserts
import chocolateCake from "./assets/chocolatecake.jpg";
import iceCream from "./assets/icecream.jpg";
import brownies from "./assets/brownies.jpg";
import cheesecake from "./assets/cheesecake.jpg";
import fruitTart from "./assets/fruittart.jpg";

// Map recipe titles to images
const imageMap = {
  // Breakfast
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

  // Lunch
  "Pasta": pasta,
  "Burger": burger,
  "Pizza": pizza,
  "Soup": soup,
  "Curry": curry,
  "Kebab": kebab,

  // Dinner
  "Paneer Butter Masala": paneerButterMasala,
  "Spaghetti Bolognese": spaghettiBolognese,
  "Vegetable Stir Fry": vegetableStirFry,
  "Grilled Chicken": grilledChicken,
  "Grilled Fish": grilledFish,

  // Drinks
  "Classic Mojito": mojito,
  "Mango Lassi": mangoLassi,
  "Iced Coffee": icedCoffee,
  "Fresh Lemonade": lemonade,
  "Green Smoothie": greenSmoothie,

  // Snacks
  "Samosa": samosa,
  "Nachos": nachos,
  "Spring Rolls": springRolls,

  //Desserts
  "Chocolate Cake": chocolateCake,
  "Ice Cream": iceCream,   
  "Brownies": brownies,
  "Cheesecake": cheesecake,
  "Fruit Tart": fruitTart,
};


export default function RecipePage() {
  const { id } = useParams();
  const location = useLocation();

  let recipes;

  if (location.pathname.startsWith("/breakfast")) {
    recipes = breakfastRecipes;
  } else if (location.pathname.startsWith("/lunch")) {
    recipes = lunchRecipes;
  } else if (location.pathname.startsWith("/dinner")) {
    recipes = dinnerRecipes;
  } else if (location.pathname.startsWith("/drinks")) { 
    recipes = drinkRecipes;
  } else if (location.pathname.startsWith("/snacks")) {
    recipes = snackRecipes; 
  } else if (location.pathname.startsWith("/desserts")) {
    recipes = dessertRecipes;
  }

  const recipeIndex = Number(id);
  const recipe = recipes ? recipes[recipeIndex] : null;

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
      <ol>
        {recipe.procedure.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link to={`/${recipe.category.toLowerCase()}`} className="back-btn">
        Back to {recipe.category}
      </Link>
    </div>
  );
}
