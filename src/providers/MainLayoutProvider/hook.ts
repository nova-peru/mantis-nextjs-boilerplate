import { useContext } from "react";

// Local
import { LayoutContext } from "./context";

export const useLayoutProvider = () => {
  return useContext(LayoutContext);
};
