"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slides from "../slides";
import "./howItWorks.css";
import { RxDoubleArrowRight } from "react-icons/rx";

function HowItWorks() {
  const [cards, setCards] = useState(Slides);
  const [openedCard, setOpenedCard] = useState("1");

  const handleMouseEnter = (e, cardData) => {
    e.preventDefault();
    e.stopPropagation();
    setCards((prevCards) =>
      [...prevCards].map((card) =>
        card.id === cardData.id ? { ...card, isOpen: true } : card
      )
    );
    setOpenedCard(cardData.id);
  };

  // const handleMouseLeave = (e, cardData) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setCards((prevCards) =>
  //     prevCards.map((card) =>
  //       card.id === cardData.id ? { ...card, isOpen: false } : card
  //     )
  //   );
  // };

  return (
    <section id="account" className="flex flex-col gap-20 mt-10 mb-10">
      <div className="grid gap-20 relative">
        <div className="bg-gradient-to-br from-black to-black text-transparent bg-clip-text flex flex-row justify-center tracking-wide">
          <div className="flex flex-col justify-center items-center text-[40px] tracking-[3px]">
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[35px] font-extrabold text-center md:text-[95px]">
                  How it works
                </h1>
                <h2 className="text-lg leading-6 text-center w-2/3">
                  Explore to learn how it works.
                </h2>
              </div>
              <Image
                src="/images/purpleStar.svg"
                alt="Description of image"
                width={60}
                height={35}
                objectFit="contain"
                className="animate-pulse"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between h-full">
          <div className="h-full">
            <div className="absolute bottom-0">
            <Image
                src="/images/purpleStar.svg"
                alt="Description of image"
                width={100}
                height={55}
                objectFit="contain"
                className="animate-pulse"
              />
            </div>
            <div className="absolute bottom-0 left-[30%]">
              <Image
                src="/images/purpleStar.svg"
                alt="Description of image"
                width={80}
                height={85}
                objectFit="contain"
                className="animate-pulse"
              />
            </div>
            <div className="cardGradient h-[400px] w-[400px] absolute top-[200px]"></div>
            <div className="absolute top-[300px] left-[100px]">
              <Image
                src="/images/mark.svg"
                alt="Description of image"
                width={300}
                height={300}
                objectFit="contain"
                className="animate-pulse"
              />
            </div>
          </div>

          <div className="gallery grid grid-cols-5 text-[20px] h-full  overflow-hidden w-full">
            {cards.map((el) =>
              el.id === openedCard && el.isOpen ? (
                <div
                  key={el.id}
                  className="bigCard grid cursor-pointer h-full"
                  // onMouseLeave={(e) => handleMouseLeave(e, el)}
                >
                  <h1 className="bigNumber bg-gradient-to-br from-white to-black text-transparent bg-clip-text">
                    {el.title}
                  </h1>
                  <h1 className="bigGalleryText bg-gradient-to-br from-white to-black text-transparent bg-clip-text">
                    {el.headers}
                  </h1>
                  <div className="bigDescription">
                    <p>{el.description}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={el.id}
                  className="bg-purple-900 text-[#DCAEFF] imgBox h-full"
                  onMouseEnter={(e) => handleMouseEnter(e, el)}
                >
                  <h1 className="number">{el.title}</h1>
                  <h1 className="galleryText">{el.headers}</h1>
                  <div className="galleryIcon">
                    <RxDoubleArrowRight size={25} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
