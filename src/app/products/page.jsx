"use client";
import React from "react";
import Cards from "../../components/ui/cards";
import Pills from "../../components/ui/pills";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/articles/${id}`); // Use template literal for dynamic route
  };

  return (
    <section
      id="getStarted"
      className="pb-10 md:pb-5 pt-20 md:pt-10 flex items-center justify-center flex-col gap-10 px-5 md:px-10 lg:px-20"
    >
      {/* Background gradients */}
      <div className="absolute top-[-8rem] right-[-8rem] w-52 h-52 bg-gradient-to-r from-purple-400 via-purple-600 to-pink-700 opacity-70 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-[-30rem] left-[-8rem] w-52 h-52 bg-gradient-to-r from-purple-600 via-pink-400 to-pink-300 opacity-70 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Header Section */}
      <div className="relative w-full flex justify-center items-center py-10 mt-20 overflow-hidden h-[200px] rounded-[1rem]">
        <div
          style={{
            backgroundImage: "url('/images/articles.jpg')", // Correctly format the URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0" // Full coverage of the parent div
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />{" "}
        {/* Dark overlay */}
        <h1 className="text-white z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Products
        </h1>
      </div>

      {/* Pills Section */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          "Accessibility",
          "Performance",
          "Responsiveness",
          "Animations",
          "Optimization",
          "Portfolio",
        ].map((label) => (
          <Pills key={label} label={label} />
        ))}
      </div>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {[
          {
            title: "2factor Security",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access.",
          },
          {
            title: "Extremely Low Swap Fees",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio.",
          },
          {
            title: "Virtual Cards",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information.",
          },
          {
            title: "2factor Security",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access.",
          },
          {
            title: "Extremely Low Swap Fees",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio.",
          },
          {
            title: "Virtual Cards",
            image:
              "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww",
            description:
              "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information.",
          },
        ].map((card, index) => (
          <Cards
            key={index}
            onClick={() => handleClick(card.title)}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Page;
