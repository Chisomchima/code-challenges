"use client";

import Sidebar from "../../../components/ui/Sidebar";
import DashboardNavbar from "../../../components/ui/DashboardNavbar";
import Footer from "../../../components/ui/footer";

function LayoutHook({ children }) {
  return (
      <div className="w-fullh-[100vh]">
        <DashboardNavbar />
        <Sidebar />
        <div className="h-[100vh] md:ml-[17%] overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </div>
  );
}

export default LayoutHook;
