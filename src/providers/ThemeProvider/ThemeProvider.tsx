import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { ThemeCustomization } from "@/themes";

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeCustomization>{children}</ThemeCustomization>
    </AppRouterCacheProvider>
  );
}
