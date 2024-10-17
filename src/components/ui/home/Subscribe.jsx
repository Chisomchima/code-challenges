"use client";
import React, { useState } from "react";

function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate a successful subscription (you can replace this with your actual subscription logic)
      setSuccessMessage("Thank you for subscribing!");
      setErrorMessage("");
      setEmail("");
    } else {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-700 to-blue-500 rounded-lg py-16 mx-5 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Stay Updated!</h2>
        <p className="text-lg text-gray-200 mb-8">
          Subscribe to our newsletter for the latest updates and resources.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full md:w-64 mb-4 md:mb-0"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        {successMessage && <p className="mt-4 text-green-300">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-300">{errorMessage}</p>}
      </div>
    </section>
  );
}

export default SubscribeSection;
