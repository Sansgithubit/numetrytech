import React, { useState } from "react";

// Sample Motivational Quotes Data
const quotes = [
  "Believe in yourself and all that you are.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "Dream big and dare to fail.",
  "You are never too old to set another goal or to dream a new dream.",
  "Act as if what you do makes a difference. It does.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "Do what you can, with what you have, where you are."
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 quotes per page

  const totalPages = Math.ceil(quotes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = quotes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="pagination-container">
      <h1 className="page-title">✨ Motivational Quotes ✨</h1>
      <h3 className="page-subtitle">Get Inspired with Every Page!</h3>

      <ul className="quote-list">
        {currentItems.map((quote, index) => (
          <li key={index} className="quote-item">"{quote}"</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Pagination;
