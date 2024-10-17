"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import NewsLetter from "./newsLetter";
import Footer from "./footer";
import { usePathname } from "next/navigation";

function LayoutHook({ children }) {
  const location = usePathname();
  const [showDashboardLayout, setShowDashboardLayout] = useState(false);
  console.log(location);
  useEffect(() => {
    if (location && location.includes("/dashboard")) {
      setShowDashboardLayout(true);
    } else {
        setShowDashboardLayout(false);
    }
  }, [location, showDashboardLayout]);
  return (
    <>
      {showDashboardLayout ? (
        <div className="w-full h-[100vh]">
          <Navbar />
          <Sidebar />
          <div className="h-[100vh] md:ml-[17%] pb-[100px]">
            {children}
            <Footer/>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          {children}
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
}

export default LayoutHook;
