"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideItems = ({ icon, link, children }) => {
  const location = usePathname();

  const isLinkActive = (path) => {
    return location === path; // Direct comparison
  };

  return (
    <Link
      href={link}
      className={`py-3 px-2 hover:bg-gray-900 w-full cursor-pointer rounded-[1rem] mb-3 flex items-center gap-5 ${
        isLinkActive(link) && "bg-purple-900"
      }`}
    >
      <div className="text-xl">{icon}</div> 
      <div>{children}</div>
    </Link>
  );
};

export default SideItems;
