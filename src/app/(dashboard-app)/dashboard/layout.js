"use client";

import Sidebar from "../../../components/ui/Sidebar";
import DashboardNavbar from "../../../components/ui/DashboardNavbar";
import Footer from "../../../components/ui/footer";

function LayoutHook({ children }) {
  return (
      <div className="w-full h-[100vh]">
        <DashboardNavbar />
        <Sidebar />
        <div className="h-[100vh] md:ml-[17%] pb-[100px]">
          {children}
          <Footer />
        </div>
      </div>
  );
}

export default LayoutHook;
