import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Links = ({ direction = "row", toggle }) => {
  const links = [
    // {
    //   title: "Challenges",
    //   path: "/challenges",
    // },
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
      {direction === "row" && toggle === false ? (
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
        <div className=" p-3 rounded-lg h-[250px] bg-purple-900 w-[300px] relative">
          <IoMdClose
            className="text-white text-2xl absolute top-2 right-2"
            onClick={setToggle(!toggle)}
          />
          <div className="pt-10 flex flex-col items-between gap-5 justify-start">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-white hover:bg-slate-600"
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
