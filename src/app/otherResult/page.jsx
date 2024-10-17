import React from "react";
import Suggestions from "../../components/ui/suggestions";
function Page() {
  return (
    <div className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-10 md:px-20 mt-20 md:mt-0 flex items-center justify-center flex-col gap-20">
      <div class="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      {/* <div class="absolute bottom-[-30rem] left-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-600 via-pink-400  opacity-70 to-pink-300 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div> */}
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7063763/pexels-photo-7063763.jpeg?auto=compress&cs=tinysrgb&w=800https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-lg w-[100%] md:w-full flex justify-center items-center md:items-start py-10 mt-20"
      >
        <div>
          <h1 className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px] font-extrabold">
            Learn from others
          </h1>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[35px] font-extrabold pb-4">Other's Result</h1>
        <span className="text-[16px] font-normal leading-7 mb-4">
          If you need help with this challenge, check out other developers work
          to have a better view about the challenge.
        </span>
        <Suggestions
          title={"Responsive Web Design with CSS Grid"}
          body={"Learn to create flexible, grid-based layouts."}
          isImage={true}
        />
        <Suggestions
          title={"JavaScript ES6 Features Overview"}
          body={"Explore new syntax and features in ES6."}
          isImage={true}
        />
        <Suggestions
          title={"Building Interactive Forms with React"}
          body={"Create dynamic and user-friendly forms using React."}
          isImage={true}
        />
        <Suggestions
          title={"CSS Animations and Transitions"}
          body={"Enhance your web pages with smooth animations."}
          isImage={true}
        />
      </div>
    </div>
  );
}

export default Page;
