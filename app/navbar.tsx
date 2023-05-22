import { ModeToggle } from "./mode-toggle";
import { NavbarItem, NavbarItems } from "./navbar-items";
import { SheetPosition } from "./mobile-navbar";

export const navbarItems: NavbarItem[] = [
  {
    children: "Home",
    pathname: "/",
  },
  {
    children: "Blog",
    pathname: "/blog",
  },
  {
    children: "Portofolio",
    pathname: "/portofolio",
  },
  {
    children: "Contact",
    pathname: "/contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <NavbarItems items={navbarItems} />
        </div>

        <div className="flex gap-2">
          <ModeToggle />

          <SheetPosition />
        </div>
      </div>
    </nav>
  );
};
