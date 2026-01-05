"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

export default function RightSidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Sheet>
      {children}
      <SheetContent
        side="right"
        className="bg-white/10 backdrop-blur-sm rounded-tl-4xl rounded-bl-4xl border border-white/20"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Membership</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 justify-between">
          <div className="grid gap-3">
            <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-45 h-13 ml-1.5">
              Login
            </Button>
          </div>
          <div className="grid gap-3">
            <Button className="bg-white/15 opacity-90  hover:scale-105 text-white rounded-full w-45 h-13">
              Register
            </Button>
          </div>
        </div>
        <div className="grid  text-white auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="@peduarte" />
          </div>
        </div>
        <div>
          <SheetFooter>
          <Button type="submit" className="bg-white/15 opacity-90">
            Continue
          </Button>
          
        </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
