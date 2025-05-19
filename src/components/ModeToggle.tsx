"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | null>(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    if (!theme) return;
    const isDark = theme === "dark";
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    if (!theme) return;
    setThemeState(theme === "dark" ? "theme-light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="hover:cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
