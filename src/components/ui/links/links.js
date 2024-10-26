import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Links = ({ direction = "row", toggle, navigate }) => {
  const links = [
    {
      title: "Articles",
      path: "/articles",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Mission",
      path: "/mission",
    },
  ];

  return (
    <>
      {direction === "row" && !toggle ? (
        <div className="flex items-center justify-center gap-10">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-3 rounded-lg h-[250px] bg-purple-900 w-[300px] relative">
          <IoMdClose
            className="text-white text-2xl absolute top-2 right-2 cursor-pointer"
            onClick={navigate} // Closes the menu on click
          />
          <div className="pt-10 flex flex-col gap-5">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-white hover:bg-slate-600 p-2 rounded"
                onClick={() => {
                  navigate(link.path); // Navigate when link is clicked
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
