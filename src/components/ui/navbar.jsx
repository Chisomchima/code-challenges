"use client";
import React, { useState } from "react";
import Drawer from "./Drawer"; // Import the Drawer component
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const Router = useRouter();

  const links = [
    { title: "Articles", path: "/articles" },
    { title: "Products", path: "/products" },
    { title: "Mission", path: "/mission" },
  ];

  const navigateTo = (path) => {
    Router.push(path);
    setIsDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    <nav className="w-full z-10 flex items-center justify-center p-2 mx-auto h-[70px] bg-purple-900 text-white fixed top-0">
      <div className="flex items-center justify-between w-full mx-[30px]">
        <Link href="/">
          <h1 className="text-[30px] font-bold">DevSpace</h1>
        </Link>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <IoMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsDrawerOpen(true)} // Open the drawer
          />
        </div>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)} // Close the drawer
        links={links.map(link => ({
          ...link,
          onClick: () => navigateTo(link.path), // Attach navigation function
        }))}
      />

      <div className="relative flex items-center justify-center gap-2 pr-2 pt-2 cursor-pointer">
        <img
          src="https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
          alt="User Avatar"
          className="h-8 w-10 rounded-full"
        />
        <Link href="/login" className="py-2 px-4 bg-purple-700 rounded-[1rem] hover:bg-purple-600">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
