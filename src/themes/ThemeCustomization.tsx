import { PropsWithChildren } from "react";

// MUI
import { ThemeProvider } from "@mui/material/styles";

// Local
import { theme } from "./theme";

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export function ThemeCustomization({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
