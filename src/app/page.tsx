"use client";

import { useEffect } from "react";
import Hero from "./components/hero";
import HomeLoading from "./components/home-loading";
import { useLoading } from "@/context/loading-context";

export default function Home() {
  const { isLoading } = useLoading();

  return (
    <main className="w-full">
      {isLoading ? (
        <div className="fixed inset-0 bg-black bg-opacity-100 z-50 flex items-center justify-center w-full h-full">
          <HomeLoading />
        </div>
      ) : (
        <Hero />
      )}
    </main>
  );
}
