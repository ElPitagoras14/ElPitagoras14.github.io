"use client";

import { NavBar } from "../NavBar";
import { InfoLinks } from "@/utils/interfaces";
import { Navigation } from "../Navigation";

interface HeaderProps {
  infoLinks: InfoLinks[];
}

export const Header = ({ infoLinks }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50">
      <NavBar>
        <Navigation infoLinks={infoLinks}></Navigation>
      </NavBar>
    </header>
  );
};
