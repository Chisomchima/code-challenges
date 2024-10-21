// "use client";s
import Hero from "../components/ui/home/hero";
import Resources from "../components/ui/home/resources";
import Articles from "../components/ui/home/articles";
import FAQ from "../components/ui/home/faq";
import Products from "../components/ui/home/products";
import WhyUs from "../components/ui/home/whyUs";
import JoinUs from "../components/ui/home/joinUs";
import Reviews from "../components/ui/home/reviews";
import { signIn } from "../../lib/auth";

export default function Home() {
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <main className="w-100vw h-[100%] items-center justify-center flex flex-col">
      <div class="absolute top-[-8rem] right-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-400 via-purple-600  opacity-70 to-pink-700 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <div class="absolute bottom-[-30rem] left-[-8rem] w-50 h-50 bg-gradient-to-r from-purple-600 via-pink-400  opacity-70 to-pink-300 rounded-full mix-blend-multiply filter blur-[100px] md:w-52 md:h-52 lg:w-[500px] lg:h-[500px] animate-blob animation-delay-4000"></div>
      <Hero handleGithubLogin={handleGithubLogin} />
      <JoinUs/>
      <Articles />
      <Resources />
      <WhyUs/>
      <Products />
      <Reviews/>
      {/* <FAQ /> */}
    </main>
  );
}
