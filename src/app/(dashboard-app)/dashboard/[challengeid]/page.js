
"use client";
{/* eslint-disable react/no-unescaped-entities */}
import React, { useState } from "react";
import Image from "next/image";
import Suggestions from "../../../../components/ui/suggestions";
import Modal from "../../../../components/ui/Modal";
import { useRouter } from "next/navigation";

function Challenge() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sharedContent, setSharedContent] = useState(null);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const router = useRouter();
  const handleResult = () => {
    router.push("/otherResult");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleShareSubmit = ({ githubLink, description }) => {
    // Handle sharing logic here, e.g., API calls
    console.log("GitHub Link:", githubLink);
    console.log("Description:", description);
    setSharedContent({ githubLink, description });
  };

  const handleStartChallenge = () => {
    if (!challengeStarted) {
      setChallengeStarted(true);
    } else {
      openModal();
    }
  };

  return (
    <section
      id="challenges"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-10 md:px-20 mt-20 md:mt-0 flex items-center justify-center flex-col gap-10"
    >
      <div className="flex pb-5">
        <div className="flex justify-center items-start flex-col pb-10 md:p-6 rounded-lg w-full md:w-1/2">
          <span className="text-2xl md:text-7xl font-extrabold pb-1 mb-5">
            Challenges
          </span>
          <span className="text-xl md:text-[20px] font-normal mb-8">
            It's time to start building.
          </span>
        </div>

        <div className="md:pt-[8%] w-full md:w-1/2 flex justify-center">
          <div className="w-4/5">
            <Image
              src={"/images/challenge.svg"}
              alt="Description of image"
              width={100}
              height={10}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 px-60 gap-[70px] w-full">
        <div>
          <h1 className="text-[55px] font-extrabold pb-4">Task</h1>
          <span className="text-[18px] font-normal leading-7">
            Make a plan for, and carry out, three real user interviews on the
            subject of digital note-taking. Aim to pull out specific insights
            that would inform the features and design of a new note-taking app
            like the one in this challenge. Analyze your findings and put
            together some recommendations based on what you've learned.
          </span>
        </div>
        <div className="w-full">
          <h1 className="text-[55px] font-extrabold pb-4">Tutorials</h1>
          <span className="text-[18px] font-normal leading-7 mb-4">
            If you need help with this challenge, check out our hand-picked
            tutorial recommendations.
          </span>
          <Suggestions
            title={"Responsive Web Design with CSS Grid"}
            body={"Learn to create flexible, grid-based layouts."}
            isImage={false}
          />
          <Suggestions
            title={"JavaScript ES6 Features Overview"}
            body={"Explore new syntax and features in ES6."}
            isImage={false}
          />
          <Suggestions
            title={"Building Interactive Forms with React"}
            body={"Create dynamic and user-friendly forms using React."}
          />
          <Suggestions
            title={"CSS Animations and Transitions"}
            body={"Enhance your web pages with smooth animations."}
            isImage={false}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`bg-black w-max rounded-full px-4 py-3 mx-2 flex justify-center items-center text-white border border-purple-700 cursor-pointer hover:bg-gradient-to-br from-purple-900 to-purple-700 shadow-md transition-all transform hover:scale-105`}
          onClick={handleStartChallenge}
        >
          <h1 className="text-center">
            {challengeStarted ? "Complete challenge" : "Start challenge"}
          </h1>
        </div>
        <div
          className="bg-gradient-to-br from-purple-900 to-purple-700  rounded-full px-4 py-3 mx-2 flex justify-center items-center text-white border border-purple-700 cursor-pointer hover:bg-black transition-all transform hover:scale-105"
          onClick={handleResult}
        >
          <h1 className="text-center">View other's result</h1>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleShareSubmit}
      />
    </section>
  );
}

export default Challenge;
