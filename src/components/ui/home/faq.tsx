"use client";
import React, { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

const FAQs = [
  {
    question: "What are Real-World Challenges?",
    answer:
      "Real-World Challenges are hands-on projects that allow you to build your skills in a practical way. Choose a challenge, use your preferred programming language, and showcase your solutions to the community.",
  },
  {
    question: "How do I earn medals?",
    answer:
      "You earn medals by completing challenges and showcasing your projects. These medals can be shared on social media to highlight your achievements.",
  },
  {
    question: "What types of articles are available?",
    answer:
      "Our articles cover a variety of topics including technology trends, best practices, and industry insights to keep you informed and competitive.",
  },
  {
    question: "How does the AI-Powered Interview Preparation work?",
    answer:
      "Our AI tools provide personalized interview questions and mock interviews tailored to your skills and job goals, helping you gain confidence and prepare effectively.",
  },
  {
    question: "Is there a community aspect to this app?",
    answer:
      "Yes! You can engage with other users, share your projects, and receive feedback to foster a supportive learning environment.",
  },
];

function FAQ() {
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-20 bg-pink-500 h-[80vh] flex items-center justify-center mb-10 mt-5" id="faq">
        <div className="container mx-auto px-4">
        <h1 className="text-[35px] font-extrabold text-center md:text-[50px]">
          Frequently asked questions
        </h1>

          <div className="flex flex-col gap-4">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg transition-transform transform cursor-pointer overflow-hidden duration-300 ${
                  openedIndex === index ? "scale-105" : "scale-100"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6 hover:bg-purple-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-purple-800">
                    {faq.question}
                  </h3>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openedIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <RxDoubleArrowRight size={25} className="text-purple-800" />
                  </span>
                </div>
                {openedIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 transition-all duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
