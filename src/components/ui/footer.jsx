import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white black w-full fixed bottom-0 ">
        <div className="border-t border-gray-800 py-1 flex items-center justify-center">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} DevSpace. All rights reserved.</p>
        </div>
    </footer>
  );
}
