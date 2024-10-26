import React from "react";
import Image from "next/image";

function Resources() {
  return (
    <section
      id="getStarted"
      className="pb-[5%] flex items-center justify-center h-auto flex-col gap-20"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-20 text-[28px] md:text-[35px] font-extrabold text-center">
          Level up your expertise
        </h1>
        <h2 className="text-base md:text-lg leading-6 text-center w-11/12 md:w-2/3">
          Embrace a new chapter filled with practical experience. Get involved
          in some of the most exciting projects in our community, each providing
          an opportunity to enhance your skills, expand your network, and gain
          hands-on experience.
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 gap-10">
        <div className="bg-purple-900 text-white rounded-[22px] grid gap-2 px-5 py-5">
          <Image
            src="/images/reward.svg"
            alt="Gain Valuable Experience"
            width={150}
            height={150}
            objectFit="contain"
          />
          <h1 className="text-[18px] md:text-[20px] font-bold">Gain Valuable Experience</h1>
          <p className="text-[12px] md:text-[13px] pr-5 leading-7">
            Unlock Mastery Level and take part in peer reviews and mentorship.
          </p>
        </div>
        
        <div className="bg-purple-900 text-white rounded-[22px] grid gap-2 px-5 py-5">
          <Image
            src="/images/challenge-task.svg"
            alt="Participate in Challenges"
            width={150}
            height={150}
            objectFit="contain"
          />
          <h1 className="text-[18px] md:text-[20px] font-bold">Participate in Challenges</h1>
          <p className="text-[12px] md:text-[13px] pr-5 leading-7">
            Each task you finish enhances your skills and transforms your resume
            into something that gets noticed.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-[22px] grid gap-2 px-5 py-5">
          <Image
            src="/images/collab.svg"
            alt="Collaborate with peers"
            width={150}
            height={150}
            objectFit="contain"
          />
          <h1 className="text-[18px] md:text-[20px] font-bold">Collaborate with peers</h1>
          <p className="text-[12px] md:text-[13px] pr-5 leading-7">
            Ask questions, start discussions, create projects and share
            resources.
          </p>
        </div>

        <div className="bg-purple-900 text-white rounded-[22px] grid gap-2 px-5 py-5">
          <Image
            src="/images/connect.svg"
            alt="Showcase your skills"
            width={150}
            height={150}
            objectFit="contain"
          />
          <h1 className="text-[18px] md:text-[20px] font-bold">Showcase your skills</h1>
          <p className="text-[12px] md:text-[13px] pr-5 leading-7">
            Your achievements are rewarded with medals that you can showcase and
            share with your network to stand out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
