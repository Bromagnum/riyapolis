"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Link from "next/link";

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <Sheet>
      {children}
      <SheetContent
        side="left"
        className="bg-white/10 backdrop-blur-sm rounded-tr-4xl rounded-br-4xl  border border-white/20"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Link href="/References">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-85 h-13">
                References
              </Button>
            </Link>
          </div>
          <div className="grid gap-3">
            <Link href="/About">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-85 h-13">
                About
              </Button>
            </Link>
          </div>
          <div className="grid gap-3">
            <Link href="/Support">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-85 h-13">
                Support
              </Button>
            </Link>
          </div>
          <div className="grid gap-3">
            <Link href="/Contact">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-85 h-13">
                Contact
              </Button>
            </Link>
          </div>
        </div>

        <SheetFooter>
          <div className="flex justify-between mb-10">
            <Link href="/Contact">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-25 h-13">
                Instagram
              </Button>
            </Link>
            <Link href="/Contact">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-25 h-13">
                WhatsApp
              </Button>
            </Link>
            <Link href="/Contact">
              <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-25 h-13">
                Behance
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
