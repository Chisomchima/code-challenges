"use client";
import React, { useEffect, useState } from "react";
import Links from "./links/links";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxCaretDown } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log(isDropdownOpen, "toggle");
  }, [toggle, isDropdownOpen]);
  const Router = useRouter();
  const challenges = () => {
    Router.push("/dashboard/myChallenges");
    setIsDropdownOpen(!isDropdownOpen);
  };
  const allChallenges = () => {
    Router.push("/dashboard");
    setIsDropdownOpen(!isDropdownOpen);
  };
  const medal = () => {
    Router.push("/dashboard/medals");
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full z-10 flex items-center justify-center p-2 mx-auto h-[70px] background text-white fixed top-0 mr-3">
      <div className="flex items-center justify-between w-full mx-[30px]">
        <Link href="/">
          <h1 className="text-[30px] font-bold">DevSpace</h1>
        </Link>
        <ul className="flex-row sm:flex hidden justify-end items-center flex-1">
          <Links direction="row" toggle={toggle} />
        </ul>

        <div
          className="sm:hidden flex flex-1 justify-end items-center"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle && <IoMenu className="text-[#31363F] text-2xl" />}
        </div>
      </div>

      {toggle && <Links direction="col" toggle={toggle} />}
      <div className="relative flex items-center justify-center gap-2 pr-2 pt-2 cursor-pointer">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
          }
          alt="User Avatar"
          className="h-8 w-10 rounded-full"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="fixed right-5 top-5 mt-10 w-58 bg-black text-white rounded shadow-lg z-[100000] p-3">
            <div className="w-full  flex items-center justify-end">
              <IoClose
                className="text-white cursor-pointer justify-self-end"
                onClick={() => setIsDropdownOpen(false)}
              />
            </div>
            <div className="p-3">
              <p className="text-gray-200 font-semibold capitalize">
                chima valentine
              </p>
              <p className="text-gray-200">chimavalentine11@gmail.com</p>
            </div>
            <hr className="border-1 border-purple-950" />
            <div
              className="p-3 hover:bg-purple-950 rounded-lg text-gray-300"
              onClick={allChallenges}
            >
              All Challenges
            </div>
            <div
              className="p-3 hover:bg-purple-950 rounded-lg text-gray-300"
              onClick={challenges}
            >
              My Challenges
            </div>
            <div
              className="p-3 hover:bg-purple-950 rounded-lg text-gray-300"
              onClick={medal}
            >
              Medals
            </div>
            <button className="block bg-gradient-to-br from-purple-900 mt-5 to-purple-700 w-full py-2 text-left px-4 bg-sa-golden rounded-lg hover:bg-yellow-600">
              Logout
            </button>
          </div>
        )}

        <Link href="/login" className="py-2 px-4 bg-purple-700 rounded-[1rem] hover:bg-purple-700">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
