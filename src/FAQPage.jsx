import React, { useState } from "react";
import "./FAQPage.css";

export default function FAQPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() !== "") {
      setSubmitted(true);
      setQuestion(""); // clear after submit
    }
  };

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <p className="faq-subtitle">
        Got questions? We’ve got answers. Browse below or ask your own!
      </p>

      {/* Example FAQ Cards */}
      <div className="faq-list">
        <div className="faq-card">
          <h3>🍴 How do I submit my own recipe?</h3>
          <p>Go to the Recipes page and click “Add Recipe”. Fill in details and upload a photo!</p>
        </div>
        <div className="faq-card">
          <h3>🥗 Are the recipes beginner-friendly?</h3>
          <p>Yes! Most recipes come with step-by-step instructions for new cooks.</p>
        </div>
        <div className="faq-card">
          <h3>🛒 Can I generate a shopping list?</h3>
          <p>Absolutely. Use our meal planner and it auto-generates groceries for you.</p>
        </div>
      </div>

      {/* Ask Question Form */}
      <div className="ask-section">
        <h2>Have another question?</h2>
        <form onSubmit={handleSubmit} className="faq-form">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p className="thanks-msg">✅ Thanks! We’ll get back to you soon.</p>
        )}
      </div>
    </div>
  );
}
