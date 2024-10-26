import cn from "../../../lib/utils.js";

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
];

const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className={cn(
      "relative w-full md:w-80 cursor-pointer overflow-hidden border p-6 shadow-sm bg-white rounded-[1rem] flex flex-col"
    )}
  >
    <div className="flex items-center gap-4 mb-4">
      <img className="rounded-full" width="50" height="50" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-lg font-semibold dark:text-white">
          {name}
        </figcaption>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {username}
        </p>
      </div>
    </div>
    <blockquote className="text-sm text-gray-700 dark:text-gray-300">
      {body}
    </blockquote>
  </figure>
);

export default function ReviewsPage() {
  return (
    <section className="w-full h-auto flex items-center justify-center py-10">
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-[28px] md:text-[35px] font-extrabold text-center">
            See What Our Users Are Saying
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Our users love what we do, and they can’t stop sharing their
            thoughts. Here’s what a few of them have to say about their
            experience.
          </p>
        </div>

        <div className="flex items-center justify-center w-full px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
