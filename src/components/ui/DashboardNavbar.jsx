"use client";
import React, { useState } from "react";
import Drawer from "./Drawer"; // Import the Drawer component
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DashboardNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const Router = useRouter();
  const links = [
    { path: "/dashboard", title: "Dashboard" },
    { path: "/dashboard/myChallenges", title: "My Challenges" },
    { path: "/dashboard/medals", title: "Medals" },
    { path: "/dashboard/community", title: "Community" },
    { path: "/dashboard/interview-prep", title: "Interview Prep" },
    { path: "/dashboard/profile", title: "Your Profile" },
  ];
  const navigateTo = (path) => {
    Router.push(path);
    setIsDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    <nav className="w-full z-[200] flex items-center justify-between p-2 mx-auto h-[70px] bg-purple-900 text-white fixed top-0">
      <Link href="/" className="text-[30px] ml-5 font-bold">
        DevSpace
      </Link>

      <div className="flex items-center justify-end gap-5">
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          links={links.map((link) => ({
            ...link,
            onClick: () => navigateTo(link.path),
          }))}
        />

        <div className="relative flex items-center justify-center gap-2 pr-2 pt-2 cursor-pointer">
          <img
            src="https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
            alt="User Avatar"
            className="h-8 w-10 rounded-full"
          />
        </div>

        <div className="sm:hidden">
          <IoMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsDrawerOpen(true)} // Open the drawer
          />
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
