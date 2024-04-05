"use client";

import { Dispatch, SetStateAction, createContext } from "react";

type LayoutContextType = {
  isDrawerOpen?: boolean;
  setDrawerOpen?: Dispatch<SetStateAction<boolean>>;
};

export const LayoutContext = createContext<LayoutContextType>({});
