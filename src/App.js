import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.jsx";
import HomePage from "./HomePage.jsx";
import LunchPage from "./lunchPage.jsx";
import BreakfastPage from "./BreakfastPage.jsx";
import DinnerPage from "./DinnerPage.jsx";
import DrinksPage from "./DrinksPage.jsx"; 
import SnacksPage from "./SnacksPage.jsx";
import DessertsPage from "./DessertsPage.jsx"; 
import RecipePage from "./RecipePage.jsx";
import AboutPage from "./AboutUs.jsx";  
import FAQPage from "./FAQPage.jsx";
import FindByIngredients from "./FindByIngredients.jsx";

  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Breakfast */}
        <Route path="/breakfast" element={<BreakfastPage />} />
        <Route path="/breakfast/:id" element={<RecipePage />} />

        {/* Lunch */}
        <Route path="/lunch" element={<LunchPage />} />
        <Route path="/lunch/:id" element={<RecipePage />} />

        {/* Dinner */}
        <Route path="/dinner" element={<DinnerPage />} />
        <Route path="/dinner/:id" element={<RecipePage />} />

        {/* Drinks */}
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/drinks/:id" element={<RecipePage />} />

        {/* Snacks */}
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/snacks/:id" element={<RecipePage />} />

        {/* Desserts  */}
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/desserts/:id" element={<RecipePage />} />

        {/* Other pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQPage />} /> 
        <Route path="/ingredients" element={<FindByIngredients />} />
      </Routes>
    </Router>
  );
}

export default App;
