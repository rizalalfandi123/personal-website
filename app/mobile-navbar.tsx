"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NavbarItems } from "./navbar-items";
import { navbarItems } from "./desktop-navbar";
import { useState } from "react";

export const SheetMobileNavbar = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={(e) => setOpen(e)}>
      {children}

      <SheetContent position="left" size="full">
        <SheetHeader>
          <SheetTitle>Rizal Alfandi</SheetTitle>
        </SheetHeader>

        <NavbarItems items={navbarItems} afterClickButton={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};
