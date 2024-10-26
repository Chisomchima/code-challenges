"use client";

import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center h-auto lg:h-[100vh] pt-[30px]">
      <div className="p-5 lg:p-10 flex flex-col justify-center h-full gap-5">
        <span className="text-[35px] font-extrabold leading-tight md:text-[45px] mt-10 lg:text-[60px] border-b pb-5 lg:pb-10 border-black">
          Break into tech solving real-world problems
        </span>

        <p className="text-base md:text-lg leading-7 pt-2">
          Embrace a new chapter filled with practical experience. Get involved
          in some of the most exciting projects in our community, each providing
          an opportunity to enhance your skills, expand your network, and gain
          hands-on experience.
        </p>

        <button className="text-center py-3 lg:py-4 w-full lg:w-40 bg-black hover:bg-purple-900 rounded-[1rem] flex justify-center items-center text-white cursor-pointer">
          Get Started
        </button>
      </div>

      <div className="w-full flex justify-center p-5 lg:p-10">
        <Image
          src={"/images/challenge.svg"}
          alt="Description of image"
          width={100}
          height={100} // Adjusted height to make it a square for responsiveness
          layout="responsive"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
