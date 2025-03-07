"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hasLoaded: boolean;
  setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasLoaded]);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, hasLoaded, setHasLoaded }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
