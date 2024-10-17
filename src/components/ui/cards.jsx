import React from "react";
import Image from "next/image";

function Cards({ image, title, description, textColour, onClick }) {
  return (
    <div className="rounded-lg cursor-pointer" onClick={onClick}>
      <div className={`grid gap-3 ${textColour}  p-5 `}>
        <Image
          src={image}
          alt="Description of image"
          width={150}
          height={10}
          layout="responsive"
          objectFit="contain"
          className="rounded-[1rem]"
        />
        <h1 className={`text-[20px] ${textColour}`}>{title}</h1>
        <p className={`text-[13px] w-[95%] md:w-[85%] ${textColour}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Cards;
