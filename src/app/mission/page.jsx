{/* eslint-disable react/no-unescaped-entities */}
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

function Page() {
  return (
    <section
      id="article"
      className="pb-[5%] md:pb-[2%] pt-[10%] md:mt-10 md:pt-[1%] px-5 md:px-20 flex items-center justify-center flex-col gap-10 md:gap-20"
    >
      
      <div className="md:flex w-full md:pt-20 mt-10">
        <div className="flex justify-center items-start flex-col p-6 rounded-lg w-full md:w-1/2">
          <span className="text-[18px] md:text-[55px] font-bold md:font-extrabold pb-2 mb-5 md:leading-[80px]">
            Lectures are dull.
            <br />
            We’re interactive.
          </span>
          <span className="text-[12px] md:text-[16px]  font-normal mb-8">
            We’re a network of learners, educators, and experts committed to
            creating an innovative educational platform; accessible and
            inclusive for everyone, empowering individuals to develop the skills
            for a brighter future.
          </span>
        </div>

        <div className="md:pt-[8%] w-full md:w-1/2 flex justify-center">
          <div className="w-4/5">
            <Image
              src={"/images/team.svg"}
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
      <div className="flex flex-col items-center justify-center w-full gap-10 md:gap-20">
        <div className="md:text-[45px] font-bold md:font-extrabold md:w-[65%] flex flex-wrap text-center">
          Welcome to Community-fueled learning empowerment.
        </div>
        <div className="w-full grid md:grid-cols-3 md:px-10 gap-10">
          <div className=" text-black rounded-[22px] grid justify-center gap-2 px-10 py-5">
            <Image
              src="/images/learn.svg"
              alt="Description of image"
              width={150}
              height={180}
              objectFit="contain"
            />
            <h1 className="text-[20px]">Free learning</h1>
            <p className="text-[12px] md:text-[14px] w-[95%] md:w-[85%] font-medium">
              Our unwavering commitment is to ensure that education remains an
              indispensable cornerstone of today's world, perpetually accessible
              to all without charge.
            </p>
          </div>
          <div className=" text-black rounded-[22px] grid gap-2 px-10 py-5">
            <Image
              src="/images/social.svg"
              alt="Description of image"
              width={150}
              height={180}
              objectFit="contain"
            />
            <h1 className="text-[18px] md:text-[20px]">Social interaction</h1>
            <p className="text-[12px] md:text-[14px] w-[95%] md:w-[85%] font-medium">
              Learning through shared experiences and interactions, where
              individuals collaborate, communicate, and observe to acquire
              knowledge, skills, and understanding collectively.
            </p>
          </div>
          <div className=" text-black rounded-[22px] grid gap-2 px-10 py-5">
            <Image
              src="/images/data.svg"
              alt="Description of image"
              width={150}
              height={180}
              objectFit="contain"
            />
            <h1 className="text-[20px]">Degrees driven by data</h1>
            <p className="text-[12px] md:text-[14px] w-[95%] md:w-[85%] font-medium">
              Degrees driven by data utilize analysis and interpretation to
              inform decision-making, problem-solving, and innovation across
              various academic disciplines.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-10 md:gap-20">
        <div className="md:text-[45px] font-bold md:font-extrabold flex flex-wrap text-center">
          Meet the creators
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <Image
              src={"/images/female.svg"}
              alt="Description of image"
              width={150}
              height={50}
              objectFit="contain"
              className="rounded-lg"
            />
            <div>👋 Hey i’m chisom</div>
            <div className="grid col-span-3 gap-3 px-10">
              <span>
                👋 Hey there! I'm a creative problem solver and tech enthusiast
                who loves exploring new trends.
              </span>
              <span>
                When I'm not DIY-ing something cool or diving into the latest
                tech, you can find me on an adventure, whether hiking, kayaking,
                or discovering new places.
              </span>
              <span>
                I'm a lifelong learner with a passion for building communities
                and sharing knowledge. Music keeps me inspired, and staying fit
                helps me stay energized and focused. Let's connect and create
                something amazing together! 🌟
              </span>
              <div className="flex gap-5">
                <Link href="https://www.linkedin.com/in/chisomchima">
               
                    <FaLinkedin color="purple" size={25} />
                 
                </Link>
                <Link href="https://twitter.com/thechisomchima">
                    <FaTwitter color="purple" size={25} />
                  
                </Link>
                <Link href="https://github.com/Chisomchima">
                    <FaGithub color="purple" size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 pb-5">
            <Image
              src={"/images/male.svg"}
              alt="Description of image"
              width={150}
              height={50}
              objectFit="contain"
              className="rounded-lg"
            />
            <div>👋 Heey i’m valentine</div>
            <div className="grid col-span-3 gap-3 px-10">
              <span>
                Hey there! I'm Chima Valentine, a software engineering student
                on a mission to help fellow developers build portfolio-worthy
                projects.
              </span>
              <span>
                I believe in creating meaningful and impactful work, not just
                basic calculators or weather apps.
              </span>
              <span>
                When I'm not coding, you can find me enjoying soccer or planning
                my next travel adventure. Let's connect and create something
                amazing together!
              </span>
              <div className="flex gap-5">
                <Link href="https://www.linkedin.com/in/chimavalentine/">
               
                    <FaLinkedin color="purple" size={25} />
                 
                </Link>
                <Link href="https://x.com/ChimaOmenvc1">
                    <FaTwitter color="purple" size={25} />
                  
                </Link>
                <Link href="https://github.com/omenvc">
                    <FaGithub color="purple" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
