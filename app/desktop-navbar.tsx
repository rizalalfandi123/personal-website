import { ModeToggle } from "./mode-toggle";
import { NavbarItem, NavbarItems } from "./navbar-items";
import { MobileNavbar } from "./mobile-navbar";
import Link from "next/link";

export const navbarItems: NavbarItem[] = [
  {
    children: "Home",
    pathname: "/",
  },
  {
    children: "Portofolio",
    pathname: "/portofolio",
  },
  {
    children: "Blog",
    pathname: "/blog",
  },
  {
    children: "Contact",
    pathname: "/contact",
  },
];

export const DesktopNavbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl font-semibold whitespace-nowrap">Rizal Alfandi</Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <NavbarItems items={navbarItems} />
        </div>

        <div className="flex gap-2">
          <ModeToggle />

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};
