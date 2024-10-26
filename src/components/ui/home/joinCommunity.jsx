import Image from "next/image";

export default function JoinCommunity() {
  return (
    <div className="px-5 pt-0 mt-10">
      <div className="flex flex-col lg:flex-row rounded-[1rem] h-full">
        {/* Left Section */}
        <div className="w-full p-5 lg:p-10 md:rounded-l-[1rem] flex flex-col justify-center bg-white">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            We love to be a part of your Community
          </h1>
          <p className="text-gray-700 mb-6 leading-7 text-base lg:text-lg">
            Empower your bootcamp graduates to thrive in a competitive job
            market by integrating Talenvo into your programs. Give your students
            the opportunity to gain hands-on experience, build impressive
            resumes, and secure jobs more quickly.
          </p>
          <p className="text-gray-700 mb-8 leading-7 text-base lg:text-lg">
            Fuel community growth by partnering with us to host hackathons that
            empower your members with real-world skills, foster collaboration,
            and inspire innovation.
          </p>
          <button className="flex w-full lg:w-auto justify-center items-center space-x-2 bg-purple-800 text-white px-6 py-3 rounded-[1rem] font-semibold">
            <span>Partner with us</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center p-5 lg:p-10 bg-pink-200 md:rounded-r-[1rem] border-2 border-purple-800">
          <Image
            src={"/images/people.svg"}
            alt="Description of image"
            width={100}
            height={100} // Adjusted to maintain a good aspect ratio
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
