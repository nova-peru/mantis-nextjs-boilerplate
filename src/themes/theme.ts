"use client";

import { ThemeOptions, createTheme } from "@mui/material/styles";
import { componentsOverrides } from "./overrides";
import { PaletteMode } from "@mui/material";
import { presetPalettes } from "@ant-design/colors";
import { customColors } from "./colors";
import { customTypography } from "./typography";
import { customShadows } from "./shadows";

const getPalette = (mode: PaletteMode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  const greyAscent = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  const greyConstant = ["#fafafb", "#e6ebf1"];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = customColors(colors);

  return createTheme({
    palette: {
      mode,
      common: {
        black: "#000",
        white: "#fff",
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400],
      },
      action: {
        disabled: paletteColor.grey[300],
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey.A50,
      },
    },
  });
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1536,
    },
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      minHeight: 60,
      paddingTop: 8,
      paddingBottom: 8,
    },
  },
  palette: getPalette("light").palette,
  customShadows: customShadows(getPalette("light")),
  typography: customTypography,
} as ThemeOptions & { customShadows: Partial<ThemeOptions> });

theme.components = componentsOverrides(theme);
