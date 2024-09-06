"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [activeBg, setActiveBg] = useState("#6b46c1");
  return (
    <AppContext.Provider
      value={{
        activeBg,
        setActiveBg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
