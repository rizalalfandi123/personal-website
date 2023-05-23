import { ModeToggle } from "./mode-toggle";
import { NavbarItem, NavbarItems } from "./navbar-items";
import { SheetMobileNavbar } from "./mobile-navbar";
import Link from "next/link";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button, Icons } from "@/components";

export const navbarItems: NavbarItem[] = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: "Portofolio",
    href: "/portofolio",
  },
  {
    children: "Blog",
    href: "/blog",
  },
  {
    children: "Contact",
    href: "/contact",
  },
];

export const DesktopNavbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl font-semibold whitespace-nowrap">
          Rizal Alfandi
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <NavbarItems items={navbarItems} />
        </div>

        <div className="flex gap-2">
          <ModeToggle />

          <SheetMobileNavbar>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 px-0 md:hidden">
                <Icons.hamburger />
              </Button>
            </SheetTrigger>
          </SheetMobileNavbar>
        </div>
      </div>
    </nav>
  );
};
