import React from "react";
import { signIn } from "../../../../lib/auth";
import SubscribeSection from './Subscribe'

function Hero({ handleGithubLogin }) {
  return (
    <section className=" flex items-center justify-center flex-col gap-20 relative h-[100vh] mt-[70px]">
      <div className="flex justify-center items-center">
        <div className="text-gray-900 flex flex-col gap-10 justify-center items-center md:py-8 md:px-20">
          <h1 className="text-[45px] font-extrabold leading-tight text-center md:text-[95px] md:font-extrabold md:text-center">
          Break into tech solving real world problems
          </h1>
          <p className="text-lg leading-6 text-center w-2/3">
          Stuck in tutorial limbo? Break free and master coding by solving real-world challenges. Build a portfolio that sets you apart and lands your dream job!.
          </p>
          {/* <SubscribeSection /> */}
          <div className="flex justify-center items-center">
              <button onClick={handleGithubLogin} className="text-center bg-gradient-to-br from-purple-900 to-purple-700 w-40 rounded py-3 mx-2 flex justify-center items-center text-white border border-purple-700 cursor-pointer hover:bg-black">
                Start challenges
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
