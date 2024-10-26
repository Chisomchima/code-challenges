"use client";
import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Drawer = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed z-[11] inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-[300px] bg-purple-900 p-5 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoMdClose
          className="text-white text-2xl cursor-pointer absolute top-5 left-5"
          onClick={onClose} // Close the drawer when the close icon is clicked
        />
        <div className="pt-16 flex flex-col gap-5">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-white hover:bg-slate-600 p-2 rounded"
              onClick={onClose} // Close drawer on link click
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
