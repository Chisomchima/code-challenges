import cn from "../../../lib/utils.js";
import {Marquee} from "../Marquee.jsx";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Reusable Review Card Component
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-50 hover:bg-gray-100",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

// MarqueeDemo Component
export function MarqueeDemo() {
  return (
    <div className="relative flex h-auto mx-10 flex-col items-center justify-center overflow-hidden">
      {/* Top Row Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

// Full Review Page Component
export default function ReviewsPage() {
  return (
    <section className="w-full dark:bg-gray-900 py-16">
   
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          See What Our Users Are Saying
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our users love what we do, and they can’t stop sharing their thoughts.
          Here’s what a few of them have to say about their experience.
        </p>
      </div>
      

      <MarqueeDemo />
      
    </section>
  );
}
