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
              <Link href="/login">Reference</Link>
            </Button>
          </div>
        <div className="grid  text-white auto-rows-min gap-6 px-4">
          
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit" className="bg-white/10 backdrop-blur-sm">
            Continue
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
