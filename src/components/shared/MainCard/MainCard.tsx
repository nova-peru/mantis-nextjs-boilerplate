"use client";

import React, { forwardRef } from "react";

// MUI
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

// Local
import type { Props } from "./types";

const headerSXStyle = {
  p: 2.5,
  "& .MuiCardHeader-action": { m: "0px auto", alignSelf: "center" },
};

// eslint-disable-next-line react/display-name
export const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight,
      ...others
    }: Props,
    ref
  ) => {
    const theme = useTheme<any>();
    boxShadow = theme.palette.mode === "dark" ? boxShadow || true : boxShadow;

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...(others as any)}
        sx={{
          border: border ? "1px solid" : "none",
          borderRadius: 2,
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.divider
              : theme.palette.grey.A800,
          boxShadow:
            boxShadow && (!border || theme.palette.mode === "dark")
              ? shadow || theme.customShadows.z1
              : "inherit",
          ":hover": {
            boxShadow: boxShadow ? shadow || theme.customShadows.z1 : "inherit",
          },
          "& pre": {
            m: 0,
            p: "16px !important",
            fontFamily: theme.typography.fontFamily,
            fontSize: "0.75rem",
          },
          ...sx,
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader
            sx={headerSXStyle}
            titleTypographyProps={{ variant: "subtitle1" }}
            title={title}
            action={secondary}
          />
        )}
        {darkTitle && title && (
          <CardHeader
            sx={headerSXStyle}
            title={<Typography variant="h3">{title}</Typography>}
            action={secondary}
          />
        )}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
      </Card>
    );
  }
);
