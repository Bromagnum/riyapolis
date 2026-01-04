"use client";
import Image from "next/image";
import starr from "@/public/starr.ico";
import { Dot } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-950 text-white px-4 py-6 flex justify-between items-center gap-4">
      {/* Ana başlık */}

      <div className="ml-2">
        <button className="hover:scale-110">
          <Image
            src={starr}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </button>
      </div>
      <div className="">
        <button className="text-xl font-bold bg-neutral-800  hover:bg-gray-700 hover:scale-105 text-zinc-300 border px-6 py-2 rounded-full  transition">
          RIYAPOLIS
        </button>
      </div>

      {/* Menü butonları */}
      <div className="flex gap-4">
        <button className=" bg-neutral-800 px-7 py-4   rounded-4xl hover:bg-gray-700 transition hover:scale-105 border text-xl text-zinc-300">
          TR
        </button>
        <button className="hover:scale-220 transition p-0">
          <Dot size={60} />
        </button>
      </div>
    </nav>
  );
}
