import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

function Suggestions({ title, body, isImage }) {
  return (
    <div className="border-[2px] border-gray-900 w-full p-8 rounded-lg mt-5 flex justify-between items-center">
      <div className="flex gap-10 items-center">
        {isImage && (
          <div>
            <Image
              src="/images/gitprofile.svg"
              alt="git profile"
              width={70}
              height={80}
              objectFit="contain"
            />
          </div>
        )}

        <div>
          <h1 className="text-[18px] font-bold pb-3">{title}</h1>
          <span className="text-[18px] font-normal">{body}</span>
        </div>
      </div>
      <MdArrowOutward size={28} />
    </div>
  );
}

export default Suggestions;
