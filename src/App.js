import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.jsx";
import HomePage from "./HomePage.jsx";
import BreakfastPage from "./BreakfastPage.jsx";
import RecipePage from "./RecipePage.jsx";
import AboutPage from "./AboutUs.jsx";  
import FAQPage from "./FAQPage.jsx";
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/breakfast" element={<BreakfastPage />} />
        <Route path="/breakfast/:id" element={<RecipePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/faqs" element={<FAQPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
