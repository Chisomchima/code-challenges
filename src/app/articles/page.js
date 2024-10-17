"use client";
import React from "react";
import Cards from "../../components/ui/cards";
import Pills from "../../components/ui/pills";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/articles/${id}");
  };
  return (
    <section
      id="getStarted"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:pt-[1%] flex items-center justify-center flex-col gap-20 px-5 md:px-20"
    >
      <div class="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <div class="absolute bottom-[-30rem] left-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-600 via-pink-400  opacity-70 to-pink-300 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-lg w-[100%] md:w-full flex justify-center items-center md:items-start py-10 mt-20"
      >
        <div>
          <h1 className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px] font-extrabold">
            Latest Articles
          </h1>
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
      <div className="w-full grid md:grid-cols-3 gap-5 text-black">
        <Cards
          onClick={handleClick}
          title={"2factor Security"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access."
          }
        />

        <Cards
          onClick={handleClick}
          title={"Extremely Low swap fees"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio."
          }
        />

        <Cards
          onClick={handleClick}
          title={"Virtual Cards"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information."
          }
        />
        <Cards
          onClick={handleClick}
          title={"2factor Security"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access."
          }
        />
        <Cards
          onClick={handleClick}
          title={"Extremely Low swap fees"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio."
          }
        />
        <Cards
          onClick={handleClick}
          title={"Virtual Cards"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information."
          }
        />
      </div>
    </section>
  );
}

export default Page;
