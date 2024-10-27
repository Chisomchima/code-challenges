"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        {showDashboardLayout ? (
          <div className="w-full h-[100vh]">
            <Navbar />
            <Sidebar />
            <div className="h-[100vh] md:ml-[17%] pb-[100px]">
              {children}
              <Footer />
            </div>
          </div>
        ) : (
          <div className="w-[100wh] h-full overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
          </div>
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="z-[20000]"
        />
      </QueryClientProvider>
  );
}

export default LayoutHook;
