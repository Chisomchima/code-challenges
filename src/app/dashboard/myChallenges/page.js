"use client";
import React from "react";
import Image from "next/image";
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
    router.push(`/challenges/${id}`);
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
        <Pills label={"Recent challenge"} />
        <Pills label={"Completed challenges"} />
      </div>
      <div className="w-full h-max grid  md:grid-cols-4 px-2 gap-5">
        {cardData.map((card, index) => (
          <div
            onClick={() => handleClick(card.id)}
            key={card.id}
            className={`${
              predefinedBackgroundColors[
                index % predefinedBackgroundColors.length
              ]
            }  text-white h-[300px] medal-card rounded-[22px] grid gap-2 px-2 md:px-10 py-5 cursor-pointer  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}
          >
            <Image
              src={card.imageSrc}
              alt={`Image for ${card.title}`}
              width={80}
              height={80}
              objectFit="contain"
            />
            <h1 className="text-[16px]">{card.title}</h1>
            <p className="md:text-[10px] text-[12px]  md:w-[85%] font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
