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
      <SheetContent side="left" className="bg-white/10 backdrop-blur-sm rounded-tr-4xl rounded-br-4xl  border border-white/20">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Button
              asChild
              className="bg-neutral-500 hover:scale-105 text-white rounded-full px-6 py-3"
            >
              <Link href="/login">Reference</Link>
            </Button>
          </div>
          <div className="grid gap-3">
            <Button
              asChild
              className="bg-neutral-500 hover:scale-105 text-white rounded-full px-6 py-3"
            >
              <Link href="/login">About Us</Link>
            </Button>
          </div>
          <div className="grid gap-3">
            <Button
              asChild
              className="bg-neutral-500 hover:scale-105 text-white rounded-full px-6 py-3"
            >
              <Link  href="/login">Support</Link>
            </Button>
          </div>
          <div className="grid gap-3">
            <Button
              asChild
              className="bg-neutral-500 hover:scale-105 text-white rounded-full px-6 py-3"
            >
              <Link href="/login">Communication</Link>
            </Button>
          </div>
          
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
