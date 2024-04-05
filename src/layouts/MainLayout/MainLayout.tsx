"use client";

import { PropsWithChildren, useEffect, useState } from "react";

// MUI
import { useTheme } from "@mui/material/styles";
import { Box, Toolbar, useMediaQuery } from "@mui/material";

// local
import Header from "./Header/Header";
import { menuItems } from "./menu-items";
import { MainDrawer } from "./Drawer";
import { Breadcrumbs } from "@/components/@extended";
import { useLayoutProvider } from "@/providers";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));

  const { isDrawerOpen = true, setDrawerOpen } = useLayoutProvider();

  // drawer toggler
  const handleDrawerToggle = () => {
    setDrawerOpen?.((val) => !val);
  };

  console.log("fs", isDrawerOpen);

  /*   // set media wise responsive drawer
  useEffect(() => {
    setDrawerOpen?.(!matchDownLG);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]); */

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <MainDrawer open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        <Breadcrumbs navigation={menuItems} title />

        {children}
      </Box>
    </Box>
  );
};
