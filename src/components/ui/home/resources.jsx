import React from "react";
import Image from "next/image";

function Resources() {
  return (
    <section
      id="getStarted"
      className="pb-[5%] flex items-center justify-center flex-col gap-20"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[35px] font-extrabold text-center md:text-[85px]">
          Essential Resources
        </h1>
        <h2 className="text-lg leading-6 text-center w-2/3">
          Explore our collection of tools designed to help you excel in the tech industry.
        </h2>
      </div>
      <div className="w-full grid md:grid-cols-3 px-5 gap-10">
        <div className="bg-purple-900 text-white h-[400px] rounded-[22px] grid gap-2 px-10 py-5">
          <Image
            src="/images/card1.svg"
            alt="Real World Challenges"
            width={150}
            height={180}
            objectFit="contain"
          />
          <h1 className="text-[20px] font-bold">Real-World Challenges</h1>
          <p className="text-[13px] pr-5 leading-5">
            Enhance your tech portfolio with our Real-World Challenges. Select a challenge, build it in your preferred programming language, and showcase your projects to the community. Earn shareable medals for your achievements and elevate your online presence.
          </p>
        </div>
        <div className="background text-white h-[400px] rounded-[22px] grid gap-2 px-10 py-5">
          <Image
            src="/images/card2.svg"
            alt="Insightful Articles"
            width={150}
            height={180}
            objectFit="contain"
          />
          <h1 className="text-[20px] font-bold">Insightful Articles</h1>
          <p className="text-[13px] pr-5 leading-5">
            Discover a wealth of knowledge with our curated articles on technology trends, best practices, and industry insights. Stay updated with expert opinions and practical advice to refine your skills and stay competitive in the tech landscape.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-[22px] grid gap-2 px-10 py-5">
          <Image
            src="/images/card3.svg"
            alt="AI-Powered Interview Preparation"
            width={150}
            height={180}
            objectFit="contain"
          />
          <h1 className="text-[20px] font-bold">AI-Powered Interview Preparation</h1>
          <p className="text-[13px] pr-5 leading-5">
            Prepare for your next job interview with our AI-Powered Interview Preparation tools. Access personalized questions, mock interviews, and feedback tailored to your skills and target roles. Gain confidence and improve your chances of success in the competitive job market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
