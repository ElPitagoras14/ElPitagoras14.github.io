"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
}

export default function ModeToggle({ className }: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
      className={cn("hover:text-primary hover:cursor-pointer px-1", className)}
    >
      {theme === "light" ? (
        <Sun className="h-[0.8rem] w-[0.8rem] lg:h-[1.2rem] lg:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-[0.8rem] w-[0.8rem] lg:h-[1.2rem] lg:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </div>
  );
}
