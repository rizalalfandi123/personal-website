import { Button, Icons } from "@/components";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavbarItems } from "./navbar-items";
import { navbarItems } from "./navbar";

export function SheetPosition() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0 md:hidden">
          <Icons.hamburger />
        </Button>
      </SheetTrigger>

      <SheetContent position="left" size="full">
        <SheetHeader>
          <SheetTitle>Rizal Alfandi</SheetTitle>
        </SheetHeader>

        <NavbarItems items={navbarItems} />
      </SheetContent>
    </Sheet>
  );
}
