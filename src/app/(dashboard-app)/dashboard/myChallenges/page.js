"use client";
import React from "react";
import { MdShare } from "react-icons/md";
import Pills from "../../../../components/ui/pills";
import { useRouter } from "next/navigation";

function Page() {
  const cardData = [
    {
      id: 1,
      imageSrc: "/images/articles.jpg",
      title: "2factor Security",
      description:
        "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access.",
    },
    {
      id: 2,
      imageSrc: "/images/articles.jpg",
      title: "Extremely Low Swap Fees",
      description:
        "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio.",
    },
    {
      id: 3,
      imageSrc: "/images/articles.jpg",
      title: "Virtual Cards",
      description:
        "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information.",
    },
    {
      id: 4,
      imageSrc: "/images/articles.jpg",
      title: "Secure Wallet",
      description:
        "Store your digital assets securely with our highly encrypted wallet solutions, protecting your investments from potential threats.",
    },
    {
      id: 5,
      imageSrc: "/images/articles.jpg",
      title: "Instant Transactions",
      description:
        "Experience lightning-fast transactions, ensuring your crypto transfers are completed within seconds, not minutes.",
    },
    {
      id: 6,
      imageSrc: "/images/articles.jpg",
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any issues or questions you may have.",
    },
    {
      id: 7,
      imageSrc: "/images/articles.jpg",
      title: "Advanced Analytics",
      description:
        "Utilize our advanced analytics tools to gain insights into market trends and make informed investment decisions.",
    },
    {
      id: 8,
      imageSrc: "/images/articles.jpg",
      title: "User-Friendly Interface",
      description:
        "Navigate our platform with ease, thanks to our intuitive and user-friendly interface designed for both beginners and experts.",
    },
    {
      id: 9,
      imageSrc: "/images/articles.jpg",
      title: "Secure Login",
      description:
        "Protect your account with our secure login system, featuring state-of-the-art encryption and multi-layer authentication.",
    },
    {
      id: 10,
      imageSrc: "/images/articles.jpg",
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
    <div
      id="challenges"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-10 flex items-center justify-center flex-col h-max gap-10"
    >
      <div class="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <div class="absolute bottom-[-30rem] left-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-600 via-pink-400  opacity-70 to-pink-300 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-lg w-[100%] md:w-full flex justify-center items-center md:items-start py-10 mt-20"
      >
        <div>
          <h1 className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px] font-extrabold">
            My Challenges
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 px-10 flex-wrap">
        <Pills label={"Active challenges"} />
        <Pills label={"Completed challenges"} />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 px-1 sm:px-2 h-full mb-10">
        {cardData.map((card) => (
          <div
            onClick={() => handleClick(card.id)}
            key={card.id}
            className="text-black rounded-[18px] h-auto sm:rounded-[22px] grid cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow bg-gray-50"
          >
            <img
              src={card.imageSrc}
              alt={`Image for ${card.title}`}
              className="rounded-t-[18px] h-full w-full object-contain"
            />

            <div className="rounded-b-[18px] flex flex-col items-start justify-center gap-2 bg-gray-50 p-5">
              <h1 className="text-[14px] sm:text-[18px] font-medium">
                {card.title}
              </h1>
              <p className="text-[10px] sm:text-[12px]">{card.description}</p>
              <div className="flex items-center justify-between w-full mt-2">
                <button
                  className="px-4 py-3 text-white bg-purple-900 rounded-[1rem] text-[12px]sm:text-[14px] hover:bg-purple-800 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewChallenge(card.id);
                  }}
                >
                  View Challenge
                </button>
                <MdShare
                  className="text-purple-900 hover:text-purple-800 cursor-pointer"
                  size={20}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
