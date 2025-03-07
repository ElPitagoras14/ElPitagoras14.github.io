"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/context/i18n-provider";
import ModeToggle from "./mode-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(0);
  const { locale, setLocale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-center transition-all duration-200 bg-background/80 backdrop-blur-sm">
      <div className="my-2 flex flex-col rounded-full border border-secondary">
        <div className="rounded-full flex flex-row flex-wrap items-center p-2 px-4 transition-colors duration-300">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(index)}
              className="relative px-2 lg:px-4 py-2 transition-colors text-xs lg:text-base"
            >
              {item.name}
              {activeTab === index && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-muted rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <div className="relative px-2 transition-colors text-xs lg:text-base">
            <ModeToggle />
          </div>
          <div
            className="flex flex-row justify-center items-center px-2 hover:text-primary hover:cursor-pointer"
            onClick={() => {
              if (locale === "en") {
                setLocale("es");
              } else {
                setLocale("en");
              }
            }}
          >
            {locale === "en" && <span>EN</span>}
            {locale === "es" && <span>ES</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}
