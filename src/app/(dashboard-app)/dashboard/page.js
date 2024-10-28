"use client";
{
  /* eslint-disable react/no-unescaped-entities */
}
import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "../../../components/ui/Tab";
import Pills from "../../../components/ui/pills";
import { useRouter } from "next/navigation";

function Page() {
  const cardData = [
    {
      id: 1,
      imageSrc: "/images/card1.svg",
      title: "2factor Security",
      description:
        "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access.",
    },
    {
      id: 2,
      imageSrc: "/images/card2.svg",
      title: "Extremely Low Swap Fees",
      description:
        "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio.",
    },
    {
      id: 3,
      imageSrc: "/images/card3.svg",
      title: "Virtual Cards",
      description:
        "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information.",
    },
    {
      id: 4,
      imageSrc: "/images/card1.svg",
      title: "Secure Wallet",
      description:
        "Store your digital assets securely with our highly encrypted wallet solutions, protecting your investments from potential threats.",
    },
    {
      id: 5,
      imageSrc: "/images/card3.svg",
      title: "Instant Transactions",
      description:
        "Experience lightning-fast transactions, ensuring your crypto transfers are completed within seconds, not minutes.",
    },
    {
      id: 6,
      imageSrc: "/images/card2.svg",
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any issues or questions you may have.",
    },
    {
      id: 7,
      imageSrc: "/images/card1.svg",
      title: "Advanced Analytics",
      description:
        "Utilize our advanced analytics tools to gain insights into market trends and make informed investment decisions.",
    },
    {
      id: 8,
      imageSrc: "/images/card3.svg",
      title: "User-Friendly Interface",
      description:
        "Navigate our platform with ease, thanks to our intuitive and user-friendly interface designed for both beginners and experts.",
    },
    {
      id: 9,
      imageSrc: "/images/card2.svg",
      title: "Secure Login",
      description:
        "Protect your account with our secure login system, featuring state-of-the-art encryption and multi-layer authentication.",
    },
    {
      id: 10,
      imageSrc: "/images/card1.svg",
      title: "Mobile App",
      description:
        "Access your account on the go with our mobile app, available for both iOS and Android devices, providing you with flexibility and control.",
    },
  ];

  const predefinedBackgroundColors = [
    "bg-purple-900",
    "bg-gradient-to-r from-purple-900 to-pink-700",
    "bg-[#1D0D2A]",
  ];
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <section
      id="challenges"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-5 sm:px-8 flex items-center justify-center flex-col gap-7"
    >
      <div className="relative w-full flex justify-center items-center py-8 mt-10 sm:mt-20 overflow-hidden h-[150px] sm:h-[200px] rounded-[20px] sm:rounded-[30px]">
        {/* Background Image */}
        <div
          style={{
            backgroundImage: "url('/images/articles.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        {/* Text Content */}
        <div className="relative z-20 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-2">
            Welcome back, Chima!
          </h1>
          <p className="text-white text-sm sm:text-base">
            You’re doing great this week. Keep it up!
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Individual Stat Card */}
        <div className="bg-pink-100 p-4 sm:p-6 rounded-[1rem] border-2 border-purple-700">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 flex items-center space-x-2">
            <span role="img" aria-label="graduation">
              💪
            </span>
            <span className="text-pink-500">Total Active Challenges</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            In total, you’ve taken part in{" "}
            <span className="text-pink-500 font-bold">0 Challenges</span>. Take
            part in real-world challenges.
          </p>
        </div>

        {/* Last card example */}
        <div className="bg-yellow-50 p-4 sm:p-6 rounded-[1rem] border-2 border-purple-700">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 flex items-center space-x-2">
            <span role="img" aria-label="credits">
              🥇
            </span>
            <span className="text-yellow-600">Claimed Medals</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            In total, you’ve earned{" "}
            <span className="text-yellow-600 font-bold">0 Medals</span>.
          </p>
        </div>
        {/* Example for "Completed Challenges" */}
        <div className="bg-purple-100 p-4 sm:p-6 rounded-[1rem] border-2 border-purple-700">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 flex items-center space-x-2 text-purple-600">
            <span role="img" aria-label="quiz">
              📋
            </span>
            <span>Completed Challenges</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            In total, You have Completed{" "}
            <span className="text-purple-600 font-bold">0 Challenges</span>.
          </p>
        </div>
      </div>

      <div className="w-full bg-white mb-20 p-5 sm:p-8 text-gray-800 rounded-[20px] sm:rounded-[30px]">
        <Tabs>
          <Tab title="Frontend">
            <div className="flex items-center justify-center gap-2 px-5 sm:px-10 flex-wrap pb-8 md:pb-10">
              <Pills label={"Beginner"} />
              <Pills label={"Medium"} />
              <Pills label={"Advanced"} />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 px-1 sm:px-2">
              {cardData.map((card, index) => (
                <div
                  onClick={() => handleClick(card.id)}
                  key={card.id}
                  className={`${
                    predefinedBackgroundColors[
                      index % predefinedBackgroundColors.length
                    ]
                  } text-white h-[250px] sm:h-[300px] rounded-[18px] sm:rounded-[22px] grid gap-2 p-4 sm:px-6 sm:py-5 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <Image
                    src={card.imageSrc}
                    alt={`Image for ${card.title}`}
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
                  />
                  <h1 className="text-[14px] sm:text-[16px]">{card.title}</h1>
                  <p className="text-[10px] sm:text-[12px] md:w-[85%] font-medium">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Tab>

          <Tab title="Backend">
            <div className="flex items-center justify-center gap-2 px-5 sm:px-10 flex-wrap pb-8 md:pb-10">
              <Pills label={"Beginner"} />
              <Pills label={"Medium"} />
              <Pills label={"Advanced"} />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 px-1 sm:px-2">
              {cardData.map((card, index) => (
                <div
                  onClick={() => handleClick(card.id)}
                  key={card.id}
                  className={`${
                    predefinedBackgroundColors[
                      index % predefinedBackgroundColors.length
                    ]
                  } text-white h-[250px] sm:h-[300px] rounded-[18px] sm:rounded-[22px] grid gap-2 p-4 sm:px-6 sm:py-5 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <Image
                    src={card.imageSrc}
                    alt={`Image for ${card.title}`}
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
                  />
                  <h1 className="text-[14px] sm:text-[16px]">{card.title}</h1>
                  <p className="text-[10px] sm:text-[12px] md:w-[85%] font-medium">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Page;
