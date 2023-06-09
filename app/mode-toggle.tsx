"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  Icons,
  TIcon,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Button,
} from "@/components";

export interface ModeItem {
  icon: TIcon;
  label: string;
  value: string;
}

const modeItems: ModeItem[] = [
  { icon: Icons.sun, label: "Light", value: "light" },
  { icon: Icons.moon, label: "Dark", value: "dark" },
  { icon: Icons.computer, label: "System", value: "system" },
];

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const SelectedIcon: TIcon = React.useMemo(() => {
    switch (theme || (typeof window !== "undefined" && localStorage.getItem("theme"))) {
      case "dark":
        return Icons.moon;

      case "light":
        return Icons.sun;

      default:
        return Icons.computer;
    }
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <SelectedIcon className="transition-all" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {modeItems.map((mode, index) => {
          return (
            <DropdownMenuCheckboxItem onClick={() => setTheme(mode.value)} key={index}>
              <mode.icon className="h-4 w-4" />
              <span className="ml-2">{mode.label}</span>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
