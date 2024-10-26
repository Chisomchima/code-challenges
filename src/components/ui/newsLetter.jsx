"use client";
import React, { useState } from "react";
import {
  FaChevronRight,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6"; // Import social media icons
import Image from "next/image";

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
      setInputValue("");
    }
  };

  return (
    <div className="px-5 pt-0 mt-10 pb-20">
      <div className="flex flex-col lg:flex-row rounded-[1rem] h-full shadow">
        <div className="w-full flex justify-center p-10 bg-pink-100 rounded-tl-[1rem] rounded-bl-[1rem] lg:rounded-l-[1rem] lg:rounded-tr-none">
          <Image
            src={"/images/newsletter.svg"}
            alt="Description of image"
            width={100}
            height={10}
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        <div className="w-full p-10 rounded-tr-[1rem] rounded-br-[1rem] lg:rounded-r-[1rem] flex flex-col justify-center bg-white">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            Stay Updated!
          </h1>
          <p className="text-gray-400 mb-8 leading-7 text-sm md:text-base">
            Subscribe to our newsletter for the latest updates, exclusive
            resources, and exciting announcements. You'll receive curated
            content tailored to your interests, including tips and insights
            about upcoming events. Don't miss out on valuable opportunities to
            engage with our community!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <input
              type="email"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full md:w-auto flex-1 px-4 py-3 border border-purple-800 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <button
              type="submit"
              className="bg-purple-900 w-full md:w-auto justify-center text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition flex items-center"
            >
              SUBSCRIBE
            </button>
            {successMessage && (
              <p className="mt-4 text-green-400">{successMessage}</p>
            )}
          </form>

          {/* Social Media Links */}
          <div className="mt-6 flex flex-wrap space-x-4 items-center justify-center">
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-700 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@YOUR_TIKTOK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-700 transition"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.youtube.com/c/YOUR_YOUTUBE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-700 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-700 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/YOUR_TWITTER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 hover:text-purple-700 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
