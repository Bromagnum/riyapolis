"use client";

import Link from "next/link";
import darkStar from "@/public/darkStar.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-950 text-white px-4 py-6 flex justify-between items-center gap-4">
      {/* Ana başlık */}

      <div>
        <Link href="/">
            <Image src={darkStar} alt="Dark Star Logo" className="size-8"  />
        </Link>
      </div>
      <div className="">
        <Link
          href="/"
          className="text-3xl font-bold bg-gray-800 text-current px-6 py-2 rounded-full hover:scale-105 transition"
        >
          RIYAPOLIS
        </Link>
      </div>

      {/* Menü butonları */}
      <div className="flex gap-4">
        <Link
          href="#"
          className=" bg-gray-800 px-4 py-2 rounded-2xl hover:bg-gray-700 transition text-sm"
        >
          PHOTO
        </Link>
        <Link
          href="#"
          className="bg-gray-800 px-4 py-2 rounded-2xl hover:bg-gray-700 transition text-sm"
        >
          ENGINE
        </Link>
      </div>
    </nav>
  );
}
