"use client";

import { PropsWithChildren, useState } from "react";

// Local
import { LayoutContext } from "./context";

export const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  return (
    <LayoutContext.Provider value={{ isDrawerOpen, setDrawerOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};
