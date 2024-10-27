"use client";
import React from "react";
import MedalCard from "../../../../components/ui/medalCard";

const medalData = [
  {
    imageSrc: "/images/medal2.svg",
    backgroundColor: "linear-gradient(180deg, #5C2FC2, #5C88C4)",
    paragraphText: "Fantastic! You've earned the Silver Medal.",
    buttonBgColor: "bg-gradient-to-r from-purple-500 to-purple-400",
  },
  {
    imageSrc: "/images/medal3.svg",
    backgroundColor: "linear-gradient(180deg, #FF70AB, #FF5580)",
    paragraphText: "Outstanding! You achieved the Gold Medal.",
    buttonBgColor: "bg-gradient-to-r from-pink-400 to-purple-500",
  },
  {
    imageSrc: "/images/medal4.svg",
    backgroundColor: "linear-gradient(180deg, #191825, #251B37)",
    paragraphText: "Brilliant! You've got the Bronze Medal.",
    buttonBgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
  {
    imageSrc: "/images/trophy1.svg",
    backgroundColor: "linear-gradient(180deg, #3D087B, #11052C)",
    paragraphText: "Exceptional! You've won the Champion Trophy.",
    buttonBgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
  {
    imageSrc: "/images/trophy2.svg",
    backgroundColor: "linear-gradient(180deg, #3D087B, #11052C)",
    paragraphText: "Superb! You have the Winner's Trophy.",
    buttonBgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
  {
    imageSrc: "/images/trophy3.svg",
    backgroundColor: "linear-gradient(180deg, #191825, #251B37)",
    paragraphText: "Awesome! You are the Ultimate Winner.",
    buttonBgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
  {
    imageSrc: "/images/medal2.svg",
    backgroundColor: "linear-gradient(180deg, #FF70AB, #FF5580)",
    paragraphText: "Great job! You've achieved a Special Medal.",
    buttonBgColor: "bg-gradient-to-r from-pink-400 to-purple-500",
  },
  {
    imageSrc: "/images/trophy1.svg",
    backgroundColor: "linear-gradient(180deg, #5C2FC2, #5C88C4)",
    paragraphText: "Amazing! You've won the Elite Trophy.",
    buttonBgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
];

function Page() {
  return (
    <div
      id="challenges"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-10 md:px-20 flex items-center justify-center flex-col gap-20"
    >
      <div className="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      {/* <div className="absolute bottom-[-30rem] left-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-600 via-pink-400  opacity-70 to-pink-300 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div> */}
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-lg w-[100%] md:w-full flex justify-center items-center md:items-start py-10 mt-20"
      >
        <div>
          <h1 className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px] font-extrabold">
            Medals
          </h1>
        </div>
      </div>
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {medalData.map((medal, index) => (
          <MedalCard
            key={index}
            backgroundColor={medal.backgroundColor}
            imageSrc={medal.imageSrc}
            paragraphText={medal.paragraphText}
            buttonBgColor={medal.buttonBgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
