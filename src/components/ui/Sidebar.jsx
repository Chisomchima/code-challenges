import React from "react";
import SideItems from "./SidebarItems";
import Link from "next/link";
import { FaRobot } from "react-icons/fa6";
import { FaTimes, FaHome, FaUserCircle, FaMedal, FaCog } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarLinks = [
    { icon: <FaHome />, link: "/dashboard", text: "Dashboard" },
    { icon: <FaUserCircle />, link: "/dashboard/myChallenges", text: "My Challenges" },
    { icon: <FaMedal />, link: "/dashboard/medals", text: "Medals" },
    { icon: <FaPeopleLine />, link: "/dashboard/community", text: "Community" },
    { icon: <FaRobot />, link: "/dashboard/interview-prep", text: "Interview Prep" },
    { icon: <FaCog />, link: "/dashboard/profile", text: "Your Profile" },
  ];

  return (
    <div
      className={`fixed top-[70px] left-0  bottom-0 bg-black h-[100vh] z-[1000]  px-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-[17%] text-white shadow-md transition-transform duration-300`}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <div
          className="text-white bg-sa-light rounded-full p-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaTimes size={16} />{" "}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center flex-col w-full">
        {sidebarLinks.map((link, index) => (
          <SideItems key={index} icon={link.icon} link={link.link}>
            {link.text}
          </SideItems>
        ))}
      </div>

      <div className="p-3 bg-purple-900 rounded-[1rem] grid gap-4 fixed bottom-[95px] right-5 left-5">
        <div className="font-bold">
          Stay updated with the Socially mobile app
        </div>
        <Link href="#" className="underline">
          Download Now
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
