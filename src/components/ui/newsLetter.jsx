"use client";
import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";

function NewsLetter() {
  const [inputValue, setInputValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setSuccessMessage("Thank you for subscribing!");
      setInputValue(""); // Clear input after submission
    }
  };

  return (
    <section className="background text-white py-16 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-4">Stay Updated!</h1>
      <p className="text-lg text-gray-400 mb-8">
        Subscribe to our newsletter for the latest updates and resources.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full md:w-auto flex-1 px-4 py-3 border border-purple-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center"
        >
          SUBSCRIBE
          <FaChevronRight className="ml-2" />
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-400">{successMessage}</p>}
    </section>
  );
}

export default NewsLetter;
