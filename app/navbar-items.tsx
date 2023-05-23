"use client";

import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export interface NavbarItem extends React.PropsWithChildren, LinkProps {}

export const NavbarItems: React.FunctionComponent<{ items: NavbarItem[]; afterClickButton?: () => void }> = (props) => {
  const currentPathname = usePathname();

  return (
    <ul className={cn("font-medium flex flex-col mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0")}>
      {props.items.map((linkProps, index) => {
        return (
          <li key={index}>
            <Link
              className={cn("block py-2 px-0 text-foreground/60 decoration-foreground/30 md:px-2", {
                "text-foreground decoration-foreground": linkProps.href === currentPathname,
              })}
              onClick={() => {
                if (props.afterClickButton) {
                  props.afterClickButton();
                }
              }}
              {...linkProps}
            />
          </li>
        );
      })}
    </ul>
  );
};
