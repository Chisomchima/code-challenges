import { FaTasks, FaCommentDots, FaCoins, FaRobot } from "react-icons/fa";

export default function JoinUs() {
  return (
    <section className="flex w-full items-center justify-center h-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between rounded-[1rem] p-10 mx-5 mb-20 overflow-hidden h-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Challenges Section */}
          <div className="flex flex-col items-center text-center">
            <FaTasks size={48} className="text-purple-900 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Participate in Challenges
            </h2>
            <p className="text-gray-700">
              Each task you finish enhances your skills and transforms your
              resume into something that gets noticed.
            </p>
          </div>

          {/* Feedback Section */}
          <div className="flex flex-col items-center text-center">
            <FaCommentDots size={48} className="text-purple-900 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Receive Expert Feedback
            </h2>
            <p className="text-gray-700">
              A professional in the field will review your work anonymously and
              provide customized feedback to support your development.
            </p>
          </div>

          {/* Earn Medals Section */}
          <div className="flex flex-col items-center text-center">
            <FaCoins size={48} className="text-purple-900 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Earn Shareable Medals</h2>
            <p className="text-gray-700">
              Your achievements are rewarded with medals that you can showcase
              and share with your network to stand out.
            </p>
          </div>

          {/* AI-Powered Interview Prep Section */}
          <div className="flex flex-col items-center text-center">
            <FaRobot size={48} className="text-purple-900 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              AI-Powered Interview Prep
            </h2>
            <p className="text-gray-700">
              Get ready for interviews with personalized, AI-driven mock
              interview sessions to enhance your confidence and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
