"use client";

import React from "react";
import { Globe } from "../globe"; 
import RainbowButton from "../PulsatingButton";

function Hero({ handleGithubLogin }) {
  return (
    <section className="flex items-center justify-center flex-col gap-20 relative h-[90vh] mt-[70px] overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="text-gray-900 flex flex-col gap-10 justify-center items-center md:py-8 md:px-20">
          <h1 className="text-[45px] font-extrabold leading-tight text-center md:text-[95px] md:font-extrabold md:text-center overflow-hidden">
            Break into tech solving real world problems
          </h1>
          <p className="text-lg leading-6 text-center w-2/3">
            Stuck in tutorial limbo? Break free and master coding by solving real-world challenges. Build a portfolio that sets you apart and lands your dream job!
          </p>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handleGithubLogin}
              className="text-center bg-gradient-to-br py-4 from-purple-900 to-purple-600 w-40 rounded-[1rem] mx-2 flex justify-center items-center text-white border animate-rainbow cursor-pointer"
            >
              Start challenges
            </button>
          </div>
        </div>
      </div>
      {/* Globe is positioned absolutely behind the Hero content */}
      {/* <Globe className="absolute bottom-[-50vh] left-1/2 h-[20vh]" /> */}
    </section>
  );
}

export default Hero;
