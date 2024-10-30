import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

function Suggestions({ title, body, image }) {
  return (
    <div className="border border-gray-400 w-full py-2 mt-5 flex justify-between items-center rounded-[1rem] px-5">
      <div className="flex gap-5 items-center">
        {image && (
          <div>
            <Image
              src={image}
              alt="git profile"
              width={70}
              height={80}
              objectFit="contain"
            />
          </div>
        )}

        <div>
          <h1 className="text-[16px] font-bold pb-1">{title}</h1>
          <span className="text-[14px] font-normal">{body}</span>
        </div>
      </div>
      <MdArrowOutward size={28} />
    </div>
  );
}

export default Suggestions;
