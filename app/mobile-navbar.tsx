"use client";

import { Button, Icons } from "@/components";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavbarItems } from "./navbar-items";
import { navbarItems } from "./desktop-navbar";
import { useState } from "react";

export const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={(e) => setOpen(e)}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0 md:hidden">
          <Icons.hamburger />
        </Button>
      </SheetTrigger>

      <SheetContent position="left" size="full">
        <SheetHeader>
          <SheetTitle>Rizal Alfandi</SheetTitle>
        </SheetHeader>

        <NavbarItems items={navbarItems} afterClickButton={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};
