"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Suggestions from "../../../../components/ui/suggestions";
import { Tabs, Tab } from "../../../../components/ui/Tab";

function Challenge() {
  const cards = [
    { title: "Marvel" },
    { title: "Heros" },
    { title: "Vampire" },
    { title: "Dominion" },
    { title: "Avengers" },
    { title: "Alchemy" },
  ];
  return (
    <section id="challenges" className="mt-[75px] overflow-hidden">
      <div className="flex flex-col md:flex-row bg-white m-5 rounded-[30px] h-[82vh]">
        <div className="flex-1 p-4">
          <div className="relative rounded-[1rem]">
            {/* Status pill */}
            <div className="absolute top-2 right-2 bg-pink-100 text-pink-500 text-xs font-semibold px-3 py-1 rounded-full">
              Active
            </div>
            <img
              className="w-full h-[150px] rounded-[1rem] mb-2 object-cover"
              src="/images/articles.jpg"
              alt="Build and Deploy a Landing Page"
            />
            <h2 className="mt-4 text-2xl font-semibold mb-5">
              Build and Deploy a Landing Page: Next.js 14, React, Tailwind,
              ShadCN, Calendly
            </h2>
          </div>
          <div>
            <Tabs>
              <Tab title="Overview">
                <div className=" h-[300px] w-full pb-20 overflow-y-auto">
                  <h3 className="font-bold">
                    Evently: An Event Management Platform
                  </h3>
                  <p className="leading-7 text-sm mt-2">
                    Your team has been tasked to build Evently, a platform that
                    allows users to create, manage, and participate in events.
                    It’s a web application that serves both users and event
                    organizers, offering features like event creation, RSVP
                    management, user authentication, and notifications. The
                    project will require cross-functional collaboration between
                    product management, frontend development, backend
                    development, and product design to ensure a seamless user
                    experience.
                  </p>
                </div>
              </Tab>
              <Tab title="Acceptance criteria">
                <div className="overflow-y-autoh-[300px] w-full">
                  <h3 className="font-bold">
                    Evently: An Event Management Platform
                  </h3>
                  <p className="leading-7 text-sm mt-2">
                    The goal is to create a fully functional event management
                    platform where users can perform actions such as event
                    creation, RSVP management, user authentication, and
                    receiving notifications.
                  </p>
                </div>
              </Tab>
              <Tab title="Resources">
                <div className="w-full overflow-y-auto h-[300px]">
                  <span className="text-sm leading-7 mb-4">
                    If you need help with this challenge, check out our
                    hand-picked tutorial recommendations.
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
              </Tab>
              <Tab title="Submissions Gallery">
                <div className="w-full overflow-y-auto h-[300px]">
                  <span className="text-sm leading-7 mb-4">
                    Get Inspired by other peoples work, check out these cool
                    projects done by your peers.
                  </span>
                  <Suggestions
                    title={"Responsive Web Design with CSS Grid"}
                    body={"Learn to create flexible, grid-based layouts."}
                    image="/images/female.svg"
                  />
                  <Suggestions
                    title={"JavaScript ES6 Features Overview"}
                    body={"Explore new syntax and features in ES6."}
                    image="/images/female.svg"
                  />
                  <Suggestions
                    title={"Building Interactive Forms with React"}
                    body={"Create dynamic and user-friendly forms using React."}
                    image="/images/female.svg"
                  />
                  <Suggestions
                    title={"CSS Animations and Transitions"}
                    body={"Enhance your web pages with smooth animations."}
                    image="/images/female.svg"
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full md:w-1/3 border-l rounded-r-[20px] bg-gray-50">
          <div className="border-b p-2 flex items-center justify-end gap-2">
            <button className="bg-purple-100 text-purple-900 px-3 py-2 rounded-[1rem] text-sm">
              Create New Group
            </button>
            <button className="bg-purple-900 text-white px-3 py-2 rounded-[1rem] text-sm">
              Start Challenge Solo
            </button>
          </div>
          <div className="grid gap-6 p-6 h-[600px] overflow-auto">
          <span className="text-[16px] font-bold px-3">You can join any of these groups to solve this challenge</span>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title }) {
  return (
    <div className="bg-white rounded-[1rem] shadow-lg w-full relative">
      {/* Status Badge */}
      <div className="absolute top-2 right-2 px-3 py-1 text-green-600 text-xs font-semibold rounded-full bg-green-100">
        Open
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h2 className="font-bold text-lg capitalize">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">2/6 Members</p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center border-t p-3 gap-2 justify-end">
        <button className="bg-white text-black px-3 py-2 rounded text-sm underline">
          View Group
        </button>
        <button className="px-3 py-2 rounded text-sm bg-pink-50 text-pink-500">
          Join Group
        </button>
      </div>
    </div>
  );
}

export default Challenge;
