"use client";
import Navbar from "./navbar";
import Footer from "./footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function LayoutHook({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[100wh] h-full overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </div>

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
