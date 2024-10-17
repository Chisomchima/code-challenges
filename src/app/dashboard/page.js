"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Pills from "../../components/ui/pills";
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
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] px-10 md:px-20 flex items-center justify-center flex-col gap-10"
    >
      <div class="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>

      <div className="md:flex w-full pt-20">
        <div className="flex justify-center items-start flex-col pb-10 md:p-6 rounded-lg w-full md:w-1/2">
          <span className="text-2xl md:text-7xl font-extrabold pb-1 mb-5">
            Challenges
          </span>
          <span className="text-xl md:text-[25px] font-normal mb-8  text-gray-800">
            It's time to start building.
          </span>
          <ul className="space-y-4 text-xl md:text-[20px] text-gray-600">
            <li className="flex items-center space-x-3">
              <FaArrowRight className=" text-gray-600 mr-2" size={20} />
              <span>Hands-on Projects</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaArrowRight className=" text-gray-600 mr-2" size={20} />
              <span>Master Essential Tools</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaArrowRight className=" text-gray-600 mr-2" size={20} />
              <span>Create Impressive Portfolio Pieces</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaArrowRight className=" text-gray-600 mr-2" size={20} />
              <span>For All Skill Levels</span>
            </li>
          </ul>
          {/* <h2 className="mt-6 text-xl md:text-2xl font-semibold text-gray-700">
            Start coding and elevate your frontend development skills today.
          </h2> */}
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
      <div className="flex items-center justify-center gap-2 px-10 flex-wrap">
        <Pills label={"Accessibility"} />
        <Pills label={"Performance"} />
        <Pills label={"Responsiveness"} />
        <Pills label={"Animations"} />
        <Pills label={"Optimization"} />
        <Pills label={"portfolio"} />
      </div>
      <div className="w-full grid  md:grid-cols-4 px-2 gap-5">
        {cardData.map((card, index) => (
          <div
            onClick={() => handleClick(card.id)}
            key={card.id}
            className={`${
              predefinedBackgroundColors[
                index % predefinedBackgroundColors.length
              ]
            }  text-white h-[300px] rounded-[22px] grid gap-2 px-2 md:px-10 py-5 cursor-pointer`}
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
    </section>
  );
}

export default Page;
