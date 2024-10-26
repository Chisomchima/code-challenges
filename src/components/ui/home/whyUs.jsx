import { FaBriefcase, FaUsers, FaTasks } from "react-icons/fa"; // Importing icons
import Link from "next/link";
import Globe from "../globe";

const WhyUs = () => {
  return (
    <section className="flex w-full items-center justify-center m-auto h-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center rounded-[1rem] border-[3px] border-purple-900 p-6 md:p-10 bg-purple-100 mx-5 mb-20 overflow-hidden relative">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center">
          <p className="text-purple-600 font-semibold text-sm mb-2">
            Your Future Starts Here
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-snug">
            Unlock the Skills You Need to Build and Elevate Your Career
          </h1>
          <p className="text-gray-600 mb-4">
            Step into a new chapter of real-world experience. Dive into some of
            the most exciting projects in our community. Each one offers you a
            chance to gain practical experience, grow your network, and sharpen
            your abilities.
            <br />
            Uncover new possibilities, and begin your personal journey today.
            Ready to get started?
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">
                <FaBriefcase /> {/* Icon representing "portfolio and career" */}
              </span>
              Develop a standout portfolio that attracts the attention of
              leading recruiters, increasing your chances of landing your ideal
              role.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-purple-600">
                <FaUsers />{" "}
                {/* Icon representing "community and collaboration" */}
              </span>
              Connect and collaborate with a diverse group of ambitious
              individuals, working together to reach common goals and support
              each other’s growth.
            </li>
            <li className="flex items-start ">
              <span className="mr-2 mt-1 text-purple-600">
                <FaTasks />{" "}
                {/* Icon representing "real-world projects and experience" */}
              </span>
              Engage in real-world projects designed to enhance your
              capabilities and better prepare you for practical challenges in
              your field.
            </li>
          </ul>
          <div className="w-full h-[60px] md:h-[80px]">
            <Link
              href="#"
              className="bg-purple-800 py-3 px-4 text-white rounded-[1rem] shadow hover:bg-purple-900 transition w-full text-center"
            >
              Start Challenges
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full h-[300px] md:h-[400px] lg:w-1/2 relative flex items-center justify-center">
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
