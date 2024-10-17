import React from "react";
import Link from "next/link";
import Cards from "../cards";
import { FaArrowRight } from "react-icons/fa";

function Articles() {
  return (
    <section
      id="article"
      className="gradient pb-[5%] md:h-[100vh] md:pb-[2%] pt-[10%] md:pt-[1%] black flex items-center justify-center flex-col gap-20 relative"
    >
      <div className="flex flex-col items-center justify-start text-[#ffff]">
        <h1 className="text-[35px] font-extrabold text-center md:text-[85px]">
          Articles
        </h1>
        <h2 className="text-lg leading-6 text-center w-2/3">
          Explore our free articles and resources designed to keep you ahead of the pack.
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-4 gap-3 text-white px-5 pb-10">
        <Cards
          title={"2factor Security"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enhance your account security with 2-factor authentication, adding an extra layer of protection to safeguard your assets and personal information from unauthorized access."
          }
        />
        <Cards
          title={"Extremely Low swap fees"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Benefit from minimal swap fees, maximizing the value of your transactions and ensuring that more of your funds go towards building your crypto portfolio."
          }
        />
        <Cards
          title={"Virtual Cards"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information."
          }
          textColor={"text-black"}
        />
        <Cards
          title={"Virtual Cards"}
          image={
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGljbGV8ZW58MHwwfDB8fHww"
          }
          description={
            "Enjoy the flexibility and security of virtual card payments, allowing you to make purchases and transactions online without sharing your sensitive financial information."
          }
        />
      </div>
      <Link href="/articles" className='text-white absolute bottom-5 right-10 flex items-center justify-center gap-1 underline'>More articles  <FaArrowRight /></Link>
    </section>
  );
}

export default Articles;
