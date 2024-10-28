import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white black w-full fixed bottom-0 ">
      <div className="border-t border-gray-800 py-1 flex items-center justify-center">
        <span className="flex items-center justify-center gap-2 text-gray-500">
          <span>&copy; {new Date().getFullYear()}</span>
          <Link href="/" className="w-[90px]">
            <Image
              src={"/images/full-logo.png"}
              alt="Description of image"
              width={100}
              height={10}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </Link>
          <span>All rights reserved.</span>
        </span>
      </div>
    </footer>
  );
}
