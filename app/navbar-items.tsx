"use client";

import { Button, ButtonProps } from "@/components";
import { cn } from "@/utils";
import { usePathname, useRouter } from "next/navigation";

export interface NavbarItem extends React.PropsWithChildren, ButtonProps {
  pathname: string;
}

export const NavbarItems: React.FunctionComponent<{ items: NavbarItem[]; afterClickButton?: () => void }> = (props) => {
  const currentPathname = usePathname();

  const router = useRouter();

  return (
    <ul className={cn("font-medium flex flex-col mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0")}>
      {props.items.map(({ pathname, ...buttonProps }, index) => {
        return (
          <li key={index}>
            <Button
              variant="link"
              className={cn("block py-2 px-0 text-foreground/60 decoration-foreground/30 md:px-2", {
                "text-foreground decoration-foreground": pathname === currentPathname,
              })}
              onClick={() => {
                router.push(pathname);

                if (props.afterClickButton) {
                  props.afterClickButton()
                }
              }}
              {...buttonProps}
            />
          </li>
        );
      })}
    </ul>
  );
};
