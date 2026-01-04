"use client";
import Image from "next/image";

import whitedot from "@/public/whitedot.ico";
import starr from "@/public/starr.ico";
import { Sidebar } from "./Sidebar";

import { SheetTrigger } from "../components/ui/sheet";
import SidebarRight from "@/components/SidebarRight";

export default function Navbar() {
  return (
    <nav className="w-full bg-neutral-950 text-white px-4 py-6 flex justify-between items-center gap-4">
      {/* Ana başlık */}
      <div className="ml-2 hover:scale-115 transition">
        <Sidebar>
          <SheetTrigger asChild>
            <button>
              <Image src={starr} width={50} height={50} alt="star" />
            </button>
          </SheetTrigger>
        </Sidebar>
      </div>

      <div className="">
        <button className="text-xl font-bold bg-neutral-800  hover:bg-gray-700 hover:scale-105 text-zinc-300 border px-6 py-2 rounded-full  transition">
          RIYAPOLIS
        </button>
      </div>

      {/* Menü butonları */}
      <div className="flex gap-4">
        <button className=" bg-neutral-800 px-6    rounded-4xl hover:bg-gray-700 transition hover:scale-105 border text-xl text-zinc-300">
          TR
        </button>
        <SidebarRight>
          <SheetTrigger asChild>
            <button>
              <Image src={whitedot} width={20} height={40} alt="star" />
            </button>
          </SheetTrigger>
        </SidebarRight>
      </div>
    </nav>
  );
}
