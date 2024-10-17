import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function MedalCard({
  backgroundColor,
  imageSrc,
  paragraphText,
  buttonBgColor,
}) {
  return (
    <div
      className={`medal-card px-6 py-10 flex flex-col justify-center items-center gap-5  rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
      style={{ background: backgroundColor }}
    >
      <div className="p-4 bg-white rounded-full shadow-md">
        <Image
          src={imageSrc}
          alt={`Image for trophy`}
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <p className="text-center text-[15px] text-white leading-5 px-2">
        {paragraphText}
      </p>
      <button
        className={`text-white text-[14px] px-5 py-2 rounded-lg shadow-md transform transition-all hover:scale-105 ${buttonBgColor}`}
      >
        Share
      </button>
    </div>
  );
}

MedalCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  buttonBgColor: PropTypes.string.isRequired,
};

export default MedalCard;
