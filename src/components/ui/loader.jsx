import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-[50]">
      {/* <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div> */}
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#581C87"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
